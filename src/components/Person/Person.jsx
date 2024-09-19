export const Person = ({ person }) => {
  const personsPartner = person.sex === 'm' ? 'wife' : 'husband';

  const partnerText = person.isMarried
    ? `My ${personsPartner} is ${person.partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
