import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { VALID_LSOA, VALID_POST_CODE } from '../../config/postCodeCheckConfig';
import { fetchPostCodeDetails } from '../../api/postCodeApi';

const PostCodeChecker = () => {
  const [postCodeValue, setInputPostCode] = useState('');
  const [showPostCodeMessage, setShowPostCodeMessage] = useState(false);
  const [isPostCodeValid, setPostCodeValidation] = useState(false);

  const handleInputChange = (event) => {
    setInputPostCode(event.target.value);
  };

  const handlePostCodeValidation = (response) => {
    const postCode = VALID_LSOA.find((lsoa) => {
      return response.result.lsoa.indexOf(lsoa) > -1;
    });
    if (postCode === undefined) {
      return setPostCodeValidation(false);
    }
    return setPostCodeValidation(true);
  };

  const handleSubmitClick = async () => {
    const postCodeWithoutSpace = postCodeValue.replace(' ', '');

    const postCodeCheck = VALID_POST_CODE.find((postcode) => {
      const abc = postcode.replace(' ', '');
      return postCodeWithoutSpace.indexOf(abc) > -1;
    });
    if (postCodeCheck) {
      setShowPostCodeMessage(true);
      setPostCodeValidation(true);
      return;
    }
    try {
      setShowPostCodeMessage(true);
      const response = await fetchPostCodeDetails(postCodeWithoutSpace);
      handlePostCodeValidation(response.data);
    } catch (error) {
      setShowPostCodeMessage(true);
    }
  };

  return (
    <>
      <h3> Please Enter Your Postcode</h3>
      <Input id="input-postcode" onChange={handleInputChange} value={postCodeValue} />
      <Button id="submit" onClick={handleSubmitClick} name="Submit" type="Submit" />
      {showPostCodeMessage &&
        (isPostCodeValid ? (
          <p data-testid="success-postcode-msg">We support the postcode.</p>
        ) : (
          <p data-testid="notfound-postcode-msg">Sorry We dont support the postcode.</p>
        ))}
    </>
  );
};

export default PostCodeChecker;
