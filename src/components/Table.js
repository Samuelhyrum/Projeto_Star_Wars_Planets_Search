import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  const { data, data2 } = useContext(StarContext);
  const { filterByName: { name }, setFilter } = useContext(StarContext);
  const [filterByName, setSearch] = useState('');

  const fil = filterByName.length
  > 0
    ? data.filter((d) => d.name.toLowerCase().includes(filterByName.toLowerCase()))
    : data2;

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
    setFilter((prev) => ({ ...prev, name: value }));
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Buscar..."
        data-testid="name-filter"
        onChange={ handleChange }
        value={ name }
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
          {
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
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
