import React from 'react';
import Button from './Button';

const user = 'Jhonatan'.toLocaleUpperCase()

const Account = () => (
  <div className="account-container">
    <div className="account-screen">
        <div className="account-title">
            WELCOME, <span className="logged-user">{user}</span>
        </div>
        <div className="half-container">
            <div className="left account-interest mb-center">
                MY INTERESTS
            </div>

            {/* Should be dynamic  */}
            <Button color="red" variant="round" text="POLITICS"></Button>
            <Button color="purple" variant="round" text="BUSINESS"></Button>
            <Button color="blue" variant="round" text="TECH"></Button>
            <Button color="green" variant="round" text="SCIENCE"></Button>
            <Button color="orange" variant="round" text="SPORTS"></Button>
        </div>
        <div className="account-submit">
            <div>
                <Button color="blue" variant="big" text="SAVE" link="home"></Button>
            </div>
            <div>
                <Button color="none" variant="big" text="BACK TO HOME" link="home"></Button>
            </div>
        </div>
    </div>
  </div>
);

export default Account