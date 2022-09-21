import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function Filter() {
  const { setFilterByNumericValues } = useContext(StarContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValue] = useState(0);

  const handleChange = (val, setao) => {
    setao(val);
  };

  const handleClick = () => {
    setFilterByNumericValues((prev) => (
      [...prev, { column, comparison, value: values }]
    ));
  };
  return (
    <form>
      <label htmlFor="coluna">
        Coluna:
        <select
          name="colunas"
          value={ column }
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => { handleChange(value, setColumn); } }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="operador">
        Operador:
        <select
          name="operador"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target: { value } }) => { handleChange(value, setComparison); } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        value={ values }
        onChange={ ({ target: { value } }) => { handleChange(value, setValue); } }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
