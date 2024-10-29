// src/components/OrderSummary.jsx
import PropTypes from 'prop-types';

function OrderSummary({ subtotal, shipping, total }) {
    return (
        <div className="border-2 border-primary p-4 rounded-lg">
            <h3 className="text-lg font-bold text-primary mb-4">Resumen del pedido</h3>
            <div className="space-y-2 text-sm text-primary">
                <div className="flex justify-between">
                    <span>Sub-total</span>
                    <span>S/. {subtotal}</span>
                </div>
                <hr className="my-2 border-t border-primary" />
                <div className="flex justify-between">
                    <span>Envío</span>
                    <span>S/. {shipping}</span>
                </div>
                <hr className="my-2 border-t border-primary" />
                <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>S/. {total}</span>
                </div>
            </div>
            <button className="w-full mt-4 bg-primary-700 text-white font-semibold py-2 rounded-lg hover:bg-primary">
                Resumen del pedido
            </button>
        </div>
    );
}

OrderSummary.propTypes = {
    subtotal: PropTypes.number.isRequired,
    shipping: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default OrderSummary;
