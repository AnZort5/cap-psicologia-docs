import React from 'react';

export default function BotonImprimir() {
  return (
    <button 
      onClick={() => window.print()} 
      style={{
        backgroundColor: '#1A5276',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginBottom: '20px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'background-color 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#123953'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1A5276'}
    >
      🖨️ Imprimir Guía / Guardar como PDF
    </button>
  );
}