import React from 'react';
import FullName from './profile/FullName';
import ProfilPhoto from './profile/ProfilPhoto';
import Address from './profile/Address';
import './Main.css';

const Profile =() => {
  return (
    <div className="profilContainer">
    <FullName />
    <ProfilPhoto />
    <Address/>
    </div>
  );
}

export default Profile;
