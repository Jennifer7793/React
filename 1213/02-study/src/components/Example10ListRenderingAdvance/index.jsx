import React from 'react';

const CategoryItem = (props) => {
  const {
    image, name,
  } = props;
  return (
    <div className="category-item">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const Example10 = () => {
  const [list, setList] = React.useState([]);

  /* React.useEffect(() => {
    fetch('./categories.json')
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories);
        setList(categories);
      });
  }, []); */

  return (
    <section data-name="Example10">
      <div className="category-wrap">
        {
          list.map((category) => {
            return (
              <CategoryItem
                key={category.id}
                name={category.name}
                image={category.image}
              />
            );
          })
        }
      </div>
    </section>
  );
};

export default Example10;
