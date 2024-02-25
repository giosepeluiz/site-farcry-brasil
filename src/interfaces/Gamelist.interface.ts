// Interface para as propriedades de um jogo
export interface GameProps {
  id?: number;
  uid?: string;
  title?: string;
  release?: string;
  cover?: string;
  platform?: string;
  description?: string;
  hasSongs?: boolean;
  features?: Feature[];
}

// Interface para as características de um jogo
export interface Feature {
  title?: string;
  description?: string;
  screenshot?: string;
  video?: string;
  youtube?: string;
  text?: string[];
  spoiler?: boolean;
  list?: List[];
  link?: Link;
}

// Interface para uma lista de itens
export interface List {
  title?: string;
  content?: string;
}

// Interface para um link
export interface Link {
  title?: string;
  href?: string;
}
