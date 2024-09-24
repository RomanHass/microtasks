type StudentType = {
  id: number
  name: string
  age: number
};

type NewComponentPropsType = {
  students: Array<StudentType>
};

export const NewComponent = (props: NewComponentPropsType) => {

  const topCars = [
    {manufacturer: 'BMW', model: 'X5'},
    {manufacturer: 'Mersedes', model: 'MLS'},
    {manufacturer: 'Audi', model: 'Q7'},
  ];

  return (
    // <ul>
    //   {props.students.map(student => {
    //     return (
    //       <li key={student.id}>
    //         <div>name: {student.name}</div>
    //         <div>age: {student.age}</div>
    //       </li>
    //     );
    //   })}
    // </ul> 

    <ul>
      {topCars.map((car, i) => {
        return (
          <li key={i}>
            <div>Car {i+1}:</div>
            <div>manufacturer: {car.manufacturer}</div>
            <div>model: {car.model}</div>
          </li>
        );
      })}
    </ul>
  );
};