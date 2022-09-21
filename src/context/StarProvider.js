import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilter] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [data2, setData2] = useState([]);
  const endpoint = 'https://swapi.dev/api/planets';

  const getPlanets = async () => {
    const { results } = await fetch(endpoint).then((response) => response.json());
    const offResidents = results.map((res) => {
      delete res.residents;
      return res;
    });
    setData(offResidents);
  };

  useEffect(() => {
    getPlanets();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setData2(data);
  }, [data]);

  useEffect(() => {
    filterByNumericValues.forEach((value) => {
      if (value.comparison === 'menor que') {
        const filtros = data2.filter((plan) => (
          Number(plan[value.column]) < Number(value.value)
        ));
        setData2(filtros);
      } else if (value.comparison === 'maior que') {
        const filtros = data2.filter((plan) => (
          Number(plan[value.column]) > Number(value.value)
        ));
        setData2(filtros);
      } else if (value.comparison === 'igual a') {
        const filtros = data2.filter((plan) => (
          Number(plan[value.column]) === Number(value.value)
        ));
        setData2(filtros);
      }
    });
  }, [filterByNumericValues]);

  const StarPlanets = {
    data,
    getPlanets,
    filterByName,
    setFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    setData,
    data2,
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
