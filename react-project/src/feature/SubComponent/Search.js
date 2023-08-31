import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchForm = styled.form`
  position: relative;
  width: 30rem;
  background: var(--color-brand);
  border-radius: var(--rad);
`;

const SearchInput = styled.input`
  height: var(--height);
  font-family: var(--font-fam);
  border: 0;
  color: var(--color-dark);
  font-size: 1.8rem;
  outline: 0;
  width: 100%;
  background: var(--color-light);
  padding: 0 1.6rem;
  border-radius: var(--rad);
  appearance: none;
  transition: all var(--dur) var(--bez);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
  
  &:not(:placeholder-shown) {
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - var(--btn-width));
  }
`;

const SearchButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: var(--btn-width);
  font-weight: bold;
  background: var(--color-brand);
  border-radius: 0 var(--rad) var(--rad) 0;
  
  + ${SearchInput}:not(:placeholder-shown) + & {
    display: block;
  }
`;

const SearchLabel = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

const Search = ({ size, value, onChange }) => {
  return (
    <SearchForm onSubmit={e => e.preventDefault()} style={{ width: size }} role="search">
      <SearchLabel htmlFor="search">Search for stuff</SearchLabel>
      <SearchInput
        id="search"
        type="search"
        onChange={onChange}
        value={value}
        placeholder="Search......🔍︎"
        autoFocus
        required
      />
      <SearchButton type="submit">Go</SearchButton>
    </SearchForm>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default Search;
