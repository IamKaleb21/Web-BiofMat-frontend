// src/pages/CartPage.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import SimilarProducts from '../components/SimilarProducts';
import SearchBar from '../components/SearchBar';

function CartPage() {
    // Datos de ejemplo para el carrito y el resumen
    const cartItems = [
        { id: "1", title: "Libro Matemática", imageUrl: "https://via.placeholder.com/80", price: 50.0, type: "Tapa dura", quantity: 1 },
        { id: "2", title: "Libro Matemática", imageUrl: "https://via.placeholder.com/80", price: 50.0, type: "Tapa dura", quantity: 2 },
        { id: "3", title: "Libro Matemática", imageUrl: "https://via.placeholder.com/80", price: 50.0, type: "Tapa dura", quantity: 3 },
    ];
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 10.0;
    const total = subtotal + shipping;

    // Funciones para manejar cambios en el carrito
    const handleQuantityChange = (id, quantity) => {
        console.log(`Cambiar cantidad del producto ${id} a ${quantity}`);
    };

    const handleRemoveItem = (id) => {
        console.log(`Eliminar producto con ID ${id}`);
    };


    // Datos placeholder para el producto
    const placeholderProduct = {
        similarProducts: [
            { id: "2", title: "Álgebra I - Problemas Resueltos", price: 20, imageUrl: "https://via.placeholder.com/150", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
            { id: "3", title: "Geometría Básica", price: 18, imageUrl: "https://via.placeholder.com/150", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
            { id: "4", title: "Algebra I - Problemas Resueltos", imageUrl: "https://via.placeholder.com/150", price: "29.90", description: "Álgebra I - Problemas Resueltos", category: "Matemáticas", subject: "Álgebra" },
        ]
    };

    return (
        <>
            <Header />
            <SearchBar />
            <div className="mx-3 px-4 py-8">
                <h2 className="text-2xl font-extrabold text-primary mb-4 uppercase">Carrito de Compras <br className='md:hidden'/> (3 items)</h2>
                {/* Lista de productos en el carrito */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onQuantityChange={handleQuantityChange}
                                onRemove={handleRemoveItem}
                            />
                        ))}
                    </div>

                    {/* Resumen del pedido */}
                    <OrderSummary subtotal={subtotal} shipping={shipping} total={total} />
                </div>

            </div>
            {/* Productos recomendados */}
            <div>
                <SimilarProducts products={placeholderProduct.similarProducts} title={'Te puede interesar'} />
            </div>
            <Footer />
        </>
    );
}

export default CartPage;
