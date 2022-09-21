import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilter] = useState({ name: '' });
  const endpoint = 'https://swapi.dev/api/planets';

  const getPlanets = async () => {
    const { results } = await fetch(endpoint).then((response) => response.json());
    const offResidents = results.map((res) => {
      delete res.residents;
      return res;
    });
    setData(offResidents);
  };

  const StarPlanets = {
    data,
    getPlanets,
    filterByName,
    setFilter,
  };
  return (
    <StarContext.Provider value={ StarPlanets }>
      {children}
    </StarContext.Provider>
  );
}
StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
