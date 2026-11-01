import React, { useState } from 'react';

export default function Page4() {
  // State to manage the list of books
  let [booklist, updateBook] = useState([{ bname: 'Java', bprice: 500, bqty: 10, bauthor: 'Lucky' }]);

  // States to manage inputs for adding a new book
  let [bookname, setBookName] = useState('');
  let [bookprice, setBookPrice] = useState('');
  let [bookqty, setBookQty] = useState('');
  let [bookauthor, setBookAuthor] = useState('');
  let [message, setMessage] = useState('');
  let [editBook, setEditBook] = useState(-1);

  // Handler to add or edit a book in the list
  const handleSave = () => {
    if (bookname && bookprice && bookqty && bookauthor) {
      if (editBook === -1) {
        // Add the new book to the list
        updateBook([
          ...booklist,
          { bname: bookname, bprice: parseFloat(bookprice), bqty: parseInt(bookqty), bauthor: bookauthor },
        ]);
        setMessage(bookname + " - Added Successfully");
      } else {
        // Update existing book
        const updatedBooks = [...booklist];
        updatedBooks[editBook] = {
          bname: bookname,
          bprice: parseFloat(bookprice),
          bqty: parseInt(bookqty),
          bauthor: bookauthor,
        };
        updateBook(updatedBooks);
        setMessage(bookname + " - Updated Successfully");
        setEditBook(-1); // Reset edit state
      }

      // Clear input fields
      setBookName('');
      setBookPrice('');
      setBookQty('');
      setBookAuthor('');
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  // Handler to delete a book by index
  const handleDelete = (index) => {
    const updatedBooks = [...booklist];
    updatedBooks.splice(index, 1);
    updateBook(updatedBooks);
    setMessage("Book Deleted Successfully!");
  };

  // Handler to initiate editing of a book
  const handleEdit = (book, index) => {
    setEditBook(index);
    setBookName(book.bname);
    setBookPrice(book.bprice);
    setBookQty(book.bqty);
    setBookAuthor(book.bauthor);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#4A90E2' }}>Array of Objects Add, List, Delete, Edit - (CRUD)</h1>
      <p style={{ textAlign: 'center' }}>{message}</p>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type='text'
          placeholder='Name'
          value={bookname}
          onChange={(e) => setBookName(e.target.value)}
          style={{ padding: '5px', margin: '5px', borderRadius: '4px' }}
        />
        <input
          type='number'
          placeholder='Price'
          value={bookprice}
          onChange={(e) => setBookPrice(e.target.value)}
          style={{ padding: '5px', margin: '5px', borderRadius: '4px' }}
        />
        <input
          type='number'
          placeholder='Quantity'
          value={bookqty}
          onChange={(e) => setBookQty(e.target.value)}
          style={{ padding: '5px', margin: '5px', borderRadius: '4px' }}
        />
        <input
          type='text'
          placeholder='Author'
          value={bookauthor}
          onChange={(e) => setBookAuthor(e.target.value)}
          style={{ padding: '5px', margin: '5px', borderRadius: '4px' }}
        />
        <button
          onClick={handleSave}
          style={{
            padding: '5px 10px',
            margin: '5px',
            backgroundColor: editBook === -1 ? '#4CAF50' : '#FFA500',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {editBook === -1 ? 'Save' : 'Update'}
        </button>
      </div>

      <p align="center">Total Books: {booklist.length}</p>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sl No.</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Book Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Book Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Book Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Book Author</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Edit</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {booklist.map((book, index) => (
            <tr key={index} style={{ textAlign: 'center' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.bname}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.bprice}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.bqty}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.bauthor}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#FFA500',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                  onClick={() => handleEdit(book, index)}
                >
                  Edit
                </button>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}