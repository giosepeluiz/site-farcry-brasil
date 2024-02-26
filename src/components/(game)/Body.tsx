"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import styles from "@/styles/(game)/Body.module.scss";
import { useEffect, useState } from "react";
import { gamelist } from "@/data/data_games";
import { GameProps } from "@/interfaces/Gamelist.interface";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import Loading from "@/components/Loading";

const Body = ({ uid }: { uid: string }) => {
  // Estado para armazenar o jogo encontrado
  const [item, setItem] = useState<GameProps | null>(null);

  useEffect(() => {
    // Encontrar um jogo específico no array gamelist pela UID
    const foundItem = gamelist.find((item: GameProps) => item.uid === uid);

    // Definir o jogo encontrado no estado
    if (foundItem) {
      setItem(foundItem);
    }
  }, [uid]);

  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        {item ? (
          <div className={styles.section__content}>
            {/* Logo do jogo */}
            <div
              className={styles.section__content__logo}
              style={{ backgroundImage: `url('../images/logos/logo-${item?.cover}.png')` }}></div>

            {/* Navegação entre jogos */}
            <div className={styles.section__content__navigation}>
              {/* Caso o ID do jogo seja 0, renderiza a navegação para frente */}
              {item.id === 0 && <Navigation type={1} list={gamelist} id={1} />}

              {/* Caso o ID do jogo seja diferente de 0, renderiza a navegação para trás */}
              {item.id !== 0 && item?.id && gamelist[item.id - 1] && (
                <Navigation type={-1} list={gamelist} id={item.id - 1} />
              )}

              {/* Caso o ID do jogo seja diferente de 0, renderiza a navegação para frente */}
              {item.id !== 0 && item?.id && gamelist[item.id + 1] && (
                <Navigation type={1} list={gamelist} id={item.id + 1} />
              )}
            </div>

            {/* Descrição do jogo */}
            <div className={styles.section__content__description}>
              <p>{item?.description}</p>

              {/* Recursos do jogo */}
              {item?.features &&
                item.features.map((feature, index) => (
                  <div key={index} className={styles.section__content__features}>
                    {/* Título do recurso */}
                    {feature.title && (
                      <h1 className={styles.section__content__features__title}>{feature.title}</h1>
                    )}

                    {/* Descrição do recurso */}
                    {feature.description && (
                      <p className={styles.section__content__features__description}>
                        {feature.description}
                      </p>
                    )}

                    {/* Captura de tela do recurso */}
                    {feature.screenshot && (
                      <div className={styles.section__content__features__image}>
                        <Image
                          src={`/images/screenshots/${feature.screenshot}`}
                          alt={feature.title ?? ""}
                          width={1000}
                          height={562.5}
                        />
                      </div>
                    )}

                    {/* Vídeo do recurso */}
                    {feature.video && (
                      <video
                        className={styles.section__content__video}
                        controls
                        poster={`../videos/covers/${feature.video}.jpg`}>
                        <source src={`../videos/${feature.video}.mp4`} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                      </video>
                    )}

                    {/* Lista de itens do recurso */}
                    {feature.list && (
                      <ul className={styles.section__content__features__list}>
                        {feature.list.map((item, index) => (
                          <li key={index}>
                            <strong>{item.title}</strong> - {item.content}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Texto do recurso */}
                    {feature.text && (
                      <>
                        {feature.text.map((item, index) => (
                          <p className={styles.section__content__features__description} key={index}>
                            {item}
                          </p>
                        ))}
                      </>
                    )}

                    {/* Spoiler do recurso */}
                    {feature.spoiler && (
                      <div className={styles.section__content__features__spoiler}>
                        <ExclamationTriangleIcon
                          width={30}
                          height={30}
                          style={{ display: "inline" }}
                        />{" "}
                        <strong>SPOILER:</strong> o texto a seguir pode conter conteúdos que revelam
                        parte das surpresas do enredo. Leia por sua conta em risco.
                      </div>
                    )}

                    {/* Link do recurso */}
                    {feature.link && (
                      <p className={styles.section__content__features__link}>
                        Confira mais informações sobre{" "}
                        <Link href={feature.link.href ?? ""}>{feature.link.title ?? ""}</Link>.
                      </p>
                    )}
                  </div>
                ))}
            </div>

            {/* Data de lançamento do jogo */}
            <div className={styles.section__content__release}>
              {item?.release ? <hr /> : ""}
              {item?.release}
            </div>

            {/* Plataforma do jogo */}
            <div className={styles.section__content__platform}>{item?.platform}</div>

            {/* Capa do jogo */}
            <div
              className={styles.section__content__cover}
              style={{
                backgroundImage: `url('../images/assets/landscapes/bg-${item?.cover}.jpg')`,
              }}></div>
          </div>
        ) : (
          // Se não houver jogo, exibe o componente de carregamento
          <Loading />
        )}
      </div>
    </section>
  );
};

export default Body;
