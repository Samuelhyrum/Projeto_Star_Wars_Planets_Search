import React, { useContext, useEffect, useState } from 'react';
import StarContext from '../context/StarContext';

function Filter() {
  const { setFilterByNumericValues, filterColumns,
    setFilterColumn } = useContext(StarContext);
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
    setFilterColumn(filterColumns.filter((deleteColumn) => (
      deleteColumn !== column
    )));
  };

  useEffect(() => {
    setColumn(filterColumns[0]);
    setComparison('maior que');
    setValue(0);
  }, [filterColumns]);
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
          {
            filterColumns.map((col, i) => (
              <option key={ i } value={ col }>
                {col}
              </option>
            ))
          }
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
