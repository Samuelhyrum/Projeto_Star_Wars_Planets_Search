import React, { useContext, useEffect, useState } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  const { data, getPlanets } = useContext(StarContext);
  const [filterByName, setSearch] = useState('');

  useEffect(() => {
    getPlanets();
  });
  console.log(data);

  const fil = filterByName.length > 0 ? data.filter((d) => d.name.includes(filterByName))
    : [];
  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder="Buscar..."
        data-testid="name-filter"
        onChange={ (e) => setSearch(e.target.value) }
        value={ filterByName }
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filterByName.length > 0 ? (

            fil.map((filter, i) => (
              <tr key={ i }>
                <td>{filter.name}</td>
                <td>{filter.rotation_period}</td>
                <td>{filter.orbital_period}</td>
                <td>{filter.climate}</td>
                <td>{filter.diameter}</td>
                <td>{filter.gravity}</td>
                <td>{filter.terrain}</td>
                <td>{filter.surface_water}</td>
                <td>{filter.population}</td>
                <td>{filter.films}</td>
                <td>{filter.created}</td>
                <td>{filter.edited}</td>
                <td>{filter.url}</td>
              </tr>
            ))
          ) : (
            data.map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.climate}</td>
                <td>{planet.diameter}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
