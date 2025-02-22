import React from 'react';
import { ListButton } from "react-admin";
import Edit from '../../layout/Edit';
import LocationForm from './LocationForm';
import LocationTitle from "./LocationTitle";
import BlockAnonymous from "../../common/BlockAnonymous";

export const LocationEdit = (props) => (
  <BlockAnonymous>
    <Edit title={<LocationTitle />} actions={[<ListButton />]} {...props}>
      <LocationForm />
    </Edit>
  </BlockAnonymous>
);

export default LocationEdit;
