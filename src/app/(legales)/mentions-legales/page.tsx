import React from "react";

export default function page() {
  return (
    <section className="mt-[8rem] mb-[4rem] lg:mt-[12rem]">
      <div className="flex flex-col justify-center md:mt-10 lg:mt-16">
        <h3 className="font-Gudea text-center text-4xl lg:text-5xl tracking-widest uppercase sm-content-s3">
          Mentions légales
        </h3>
      </div>
      <div className="w-[95%] lg:w-[60%] mx-auto mt-8 flex-1 flex flex-col gap-[1rem] justify-center font-rubikLight text-[0.8rem]">
        <h2 className="font-Gudea text-[1.3rem] lg:text-[2rem]">
          Propriétaire du site
        </h2>
        <p>Nom du propriétaire du site : Pinto Barreto Jessy</p>
        <p>Adresse postale : 3 rue de la Chôlerie</p>
        <p>Adresse mail : contact@inthegleam.fr</p>
        <p>Numéro de téléphone : 06.21.19.44.02</p>

        <h3 className=" font-Gudea text-[1rem]">Hébergeur du site :</h3>
        <p>Nom de l&apos;hébergeur : Vercel</p>
        <p>Adresse : San Francisco</p>
        <p>Coordonnées : https://www.vercel.com</p>

        <h2 className="font-Gudea text-[1.3rem] lg:text-[2rem]">
          Propriété intellectuelle
        </h2>
        <p>
          La structure générale ainsi que les textes, sons, son savoir-faire et
          tous les autres éléments composant le site sont la proproété exclusive
          de www.inthegleam.com
        </p>
        <p>
          Les logos et marques des sociétés citées sur le site
          www.inthegleam.com sont la propriété exclusive de leurs auteurs
          respectifs. Toutes représentations et/ou reproductions et/ou
          exploitation partielle ou totale de ce site, par quelques procédés que
          ce soit, sans l&apos;autorisation expresse et préalable de
          www.inthegleam.com est interdite et constituerait une contrefaçon au
          sens des articles L 335-2 et suivants du Code de la propriété
          intellectuelle.
        </p>
        <p>
          L&apos;élaboration de liens hypertextes profonds vers le site
          www.inthegleam.com est interdite sans l&apos;accord exprès et
          préalable de www.inthegleam.com. Par ailleurs, l&apos;utilisation des
          informations contenues sur le site relève de la seule responsabilité
          de l&apos;utilisateur. Nous ne pourrions en aucun cas, et pour quelque
          cause que ce soit, en être tenus pour responsables, et ce, quelque en
          soit les conséquences. Nous ne sommes responsables d&apos;aucune
          erreur ou omission sur le présent site.
        </p>
        <p>
          Les photos et les illustrations utilisées sur le site
          www.inthegleam.com sont la propriété de leurs auteurs respectifs.
          Toute reproduction totale ou partielle de ces éléments sans
          l&apos;autorisation expresse de leurs auteurs est interdite.
        </p>

        <h2 className="font-Gudea text-[1.3rem] lg:text-[2rem]">
          Avertissement Général
        </h2>
        <p>
          La consultation du site www.inthegleam.com est proposée aux
          internautes à titre gratuit et sans aucune garantie de la part de son
          éditeur. Les informations disponibles sur ce site qui proviendrait de
          sources extérieures ne saurait garantir qu&apos;elles sont exemptes
          d&apos;erreurs, ni garantir leur complétude, leur actualité, leur
          exhaustivité ou autre.
        </p>
        <p>
          Les propriétaires des sites marchands, de services, sites persos, site
          informatiques (etc.) consultés à partir du site www.inthegleam.com
          sont seuls responsables du respect par eux de l&apos;ensemble des
          réglementations s&apos;appliquant dans le cadre des prestations
          offertes aux clients finaux, et notamment, des lois et réglements
          relatif à : la vente à distance, la protection du consommateur, la
          publicité mensongère ou trompeuse, les prix, la conformité des
          produits.
        </p>

        <h2 className="font-Gudea text-[1.3rem] lg:text-[2rem]">
          Crédit & Copyright
        </h2>
        <p>
          Les crédits et copyright des visuels et des photos présents sur le
          blog www.inthegleam.com sont signalés lorsqu&apos;elles proviennent
          d&apos;un professionnel avec son accord, à défaut : celle-ci
          proviennent de l&apos;un des sites photos libres de droit en créative
          commons : Pinterest.
        </p>
      </div>
    </section>
  );
}
