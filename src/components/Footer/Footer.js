import { render } from '../../shared/dom';

const template = `
    <footer>
        Projekt IO - Wiktoria Bronowska, Magdalena Białek, Nicole Wróbel
    </footer>
`;

export const Footer = ({ renderOn }) => {
    render({ html: template, on: renderOn });
};
