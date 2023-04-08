const AddBook = () => (
  <form className="add-form">
    <span>Add New Book</span>
    <input type="text" placeholder="title" />
    <select>
      <option value="Leadership">Leadership</option>
      <option value="Transform">Transform</option>
      <option value="Reaction">Reaction</option>
      <option value="Glory">Glory</option>
      <option value="Love">Love</option>
    </select>
    <input type="submit" value="Add Book" />
  </form>
);

export default AddBook;
