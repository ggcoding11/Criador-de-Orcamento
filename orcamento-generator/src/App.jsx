import React from "react";
import Documento from "./components/Documento";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

const App = () => {
  const [showOrcamento, setShowOrcamento] = useState(true);

  const [nomeCliente, setNomeCliente] = useState("");
  const [areaConcretada, setAreaConcretada] = useState("");

  return (
    <div id="main">
      <div className="container vh-100">
        <div className="d-flex justify-content-center mb-4">
          <form
            className="w-50"
            onSubmit={(e) => {
              e.preventDefault();
              setShowOrcamento(true);
            }}
          >
            <div className="mb-3">
              <label htmlFor="nome-att" className="form-label">
                Nome do cliente
              </label>
              <input
                type="text"
                className="form-control"
                id="nome-att"
                onChange={(e) => setNomeCliente(e.target.value)}
                value={nomeCliente}
                required
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="area-concretada" className="form-label">
                Área a ser concretada
              </label>
              <input
                type="number"
                className="form-control"
                id="area-concretada"
                onChange={(e) => setAreaConcretada(e.target.value)}
                value={areaConcretada}
                required
              ></input>
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Criar orçamento
            </button>
          </form>
        </div>
        {showOrcamento && (
          <div className="d-flex justify-content-center h-75">
            <PDFViewer className="w-50">
              <Documento
                nomeCliente={nomeCliente}
                areaConcretada={areaConcretada}
              ></Documento>
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
