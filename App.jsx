import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CheckboxFilter from '../components/CheckboxFilter';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState({
        electronics: false,
        jewelery: false,
        menclothing: false,
        womenclothing: false,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        setCategories(prevCategories => ({
            ...prevCategories,
            [name]: !prevCategories[name]
        }));
    };

    const filteredProducts = products.filter(product => 
        categories[product.category] || Object.values(categories).every(value => !value)
    );

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            <h1>FAKE STORE</h1>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="electronics"
                        checked={categories.electronics}
                        onChange={handleCheckboxChange}
                    />
                    Electronica
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="jewelery"
                        checked={categories.jewelery}
                        onChange={handleCheckboxChange}
                    />
                    Joyas
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="men's clothing"
                        checked={categories["men's clothing"]}
                        onChange={handleCheckboxChange}
                    />
                    Hombre
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="women's clothing"
                        checked={categories["women's clothing"]}
                        onChange={handleCheckboxChange}
                    />
                    Mujer
                </label>
            </div>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-item">
                        <h2>{product.title}</h2>
                        <p>{product.category}</p>
                        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
