const FilterContext = () => {

  const onFilterValueChanged = (event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <select name="isAvailable" id="isAvailable" onChange={onFilterValueChanged}>
        <option value="visi">Visi</option>
        <option value="atsakyti">Atsakyti</option>
        <option value="neatsakyti">Neatsakyti</option>
      </select>
    </div>
  );
}

export default FilterContext;