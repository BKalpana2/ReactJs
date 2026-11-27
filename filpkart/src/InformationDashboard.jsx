


import React from 'react'

function InformationDashboard() {

    let productId = 101;
    let productName = 'Laptop';
    let price = 55000;
    let brand = 'HP';
    let category = 'Electronics';

    function showId() {
        alert(productId);
    }

    function showName() {
        alert(productName);
    }

    function showPrice() {
        alert(price);
    }

    function showBrand() {
        alert(brand);
    }

    function showCategory() {
        alert(category);
    }

    return (
        <div>
            <h2>Product Information</h2>

            <table border="2">
                <tr>
                    <th>S.No</th>
                    <th>Details</th>
                    <th>Information</th>
                    <th>Action</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Product ID</td>
                    <td>{productId}</td>
                    <td><button onClick={showId}>Click</button></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Product Name</td>
                    <td>{productName}</td>
                    <td><button onClick={showName}>Click</button></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Price</td>
                    <td>{price}</td>
                    <td><button onClick={showPrice}>Click</button></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Brand</td>
                    <td>{brand}</td>
                    <td><button onClick={showBrand}>Click</button></td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Category</td>
                    <td>{category}</td>
                    <td><button onClick={showCategory}>Click</button></td>
                </tr>
            </table>
        </div>
    )
}

export default InformationDashboard
