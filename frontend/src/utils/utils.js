// Utilidades generales

// 1. Formatear precios eliminar ceros después de coma
export const formatPrice = (price) => {
 return price % 1 === 0 ? price : price.toFixed(2);
};
