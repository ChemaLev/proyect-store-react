import "../assets/css/Footer.css"

const Footer = () => {

  return (
    <>
      <footer className="h-auto bg-secondary">
        <div className="flex flex-col w-[90%] max-w-[1220px] mx-auto h-inherit min-h-inherit">
            <div className="flex flex-1 justify-between p-[20px]">
                <ul className="text-white p-[5px]">
                    <li className="block font-bold pb-[5px]">Ofertas</li>
                    <li className="pb-[5px]"><a href="#">Laptops</a></li>
                    <li className="pb-[5px]"><a href="#">Audio</a></li>
                    <li className="pb-[5px]"><a href="#">Auriculares</a></li>
                </ul>
                <ul className="text-white p-[5px]">
                    <li className="block font-bold pb-[5px]">Cómo comprar</li>
                    <li className="pb-[5px]"><a href="#">Formas de Pago</a></li>
                    <li className="pb-[5px]"><a href="#">Envios</a></li>
                    <li className="pb-[5px]"><a href="#">Devoluciones</a></li>
                </ul>
                <ul className="text-white p-[5px]">
                    <li className="block font-bold pb-[5px]">Costos y tarifas</li>
                    <li className="pb-[5px]"><a href="#">Impuesto</a></li>
                    <li className="pb-[5px]"><a href="#">Facturación</a></li>
                </ul>
                <ul className="text-white p-[5px]">
                    <li className="block font-bold pb-[5px]">Mis pedidos</li>
                    <li className="pb-[5px]"><a href="#">Pedir nuevamente</a></li>
                    <li className="pb-[5px]"><a href="#">Lista de deseos</a></li>
                </ul>
                <ul className="text-white p-[5px]">
                    <li className="block font-bold pb-[5px]">Garantía</li>
                    <li className="pb-[5px]"><a href="#">Garantía 1</a></li>
                    <li className="pb-[5px]"><a href="#">Garantía 2</a></li>
                </ul>
            </div>
        </div>
        <div className="w-[90%] max-w-[1220px] my-0 mx-auto text-center p-5 border-t-2 border-solid border-zinc-200 text-white font-bold">Curso de Html + CSS 2024</div>
      </footer>
    </>
  );
};

export default Footer;
