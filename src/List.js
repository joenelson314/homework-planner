const List = () => {
  const assigns = [
    { Title: "Calculus HW", Date: 4, ID: 1 },
    { Title: "English HW", Date: 4, ID: 1 },
    { Title: "Science HW", Date: 4, ID: 1 },
  ];
  const removeHandler =()=>{
      
  }
  return (
    <div>
        <p>{assigns}</p>
      <button onClick={removeHandler}>Remove Assignment</button>
    </div>
  );
};

export default List;
