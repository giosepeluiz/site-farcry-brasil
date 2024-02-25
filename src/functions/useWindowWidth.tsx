// Este é um COMPONENTE DE MODELO, que pode ser APAGADO do seu projeto.
// A utilidade dele é apresentar a largura ou a altura da janela, possibilitando melhorias em componentes.

/* *************************************************************************
/* Para usar este componente em outros lugares do seu projeto:
/* 1. Importe o hook personalizado:
/*    -> import useWindowDimensions from '@/src/components/useWindowDimensions';
/* 2. Utilize o hook dentro de um componente funcional:
/*    -> const { windowWidth, windowHeight } = useWindowDimensions();
/* 3. Certifique-se de substituir '@/src/components/useWindowDimensions' pelo caminho correto para o arquivo que contém o hook em seu projeto.
/*    Se necessário, ajuste também o nome e a estrutura do componente de acordo com suas necessidades.
//************************************************************************* */

"use client"; // Indica que este código é executado apenas no lado do cliente (navegador)

import { useState, useEffect } from "react";

function getWindowDimensions() {
  // Função auxiliar para obter as dimensões da janela
  if (typeof window !== "undefined") {
    // Verifica se o objeto window está definido (para evitar erros durante a renderização do lado do servidor)
    return {
      windowWidth: window.innerWidth, // Retorna a largura da janela
      windowHeight: window.innerHeight, // Retorna a altura da janela
    };
  }
  return {
    windowWidth: null, // Retorna null se o objeto window não estiver disponível
    windowHeight: null, // Retorna null se o objeto window não estiver disponível
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()); // Define o estado inicial com as dimensões da janela

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions()); // Atualiza as dimensões da janela quando ocorrer um evento de redimensionamento
    }

    window.addEventListener("resize", handleResize); // Adiciona um event listener para o evento de redimensionamento

    return () => {
      window.removeEventListener("resize", handleResize); // Remove o event listener quando o componente for desmontado
    };
  }, []);

  return windowDimensions; // Retorna as dimensões da janela
}

export default useWindowDimensions;
