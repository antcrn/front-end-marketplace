import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import APIManager from 'services/Api';
import { Typography } from '@mui/material';

const RealEstate = () => {
    
  const [data, setData] = useState({
    realEstate: {
      name: "",
      description: "",
      price: ""
    },
    user: {
      username: "",
      email: ""
    }
  })
  const realEstateID = useParams().id

  const fetchRealEstate = async () => {
    const response = await APIManager.showRealEstate(realEstateID)
    console.log(response)
    setData(response)
  }

  useEffect(() => {
    fetchRealEstate()
  },
  []
  )

  return (
    <div>
      <Typography variant="h2" component="h1">
        {data.realEstate.name}
      </Typography>
      <Typography variant="h6" component="p">
        {data.realEstate.description}
      </Typography>
      <Typography variant="p" component="p">
        Prix: {data.realEstate.price}€
      </Typography>
      <Typography variant="h6" component="p">
        Vendeur: {data.realEstate.name}
      </Typography>
      <Typography variant="h6" component="p">
        E-mail: {data.realEstate.name}
      </Typography>
    </div>
  );
};

export default RealEstate;
