import MainEmbed from "../../components/MainEmbed/MainEmbed";
import { renderToStaticMarkup } from "react-dom/server";

export default function handler(req, res) {
  res.status(200).send(renderToStaticMarkup(<MainEmbed />));
}
