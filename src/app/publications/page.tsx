import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social, publications } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { url } from "inspector";

export default function Publications() {
  const publications: Publications = {    
    display: true, // set to false to hide this section
    label: "Publications",
    title: `Publications`, // – ${person.name}
    description: `Design and dev projects by ${person.name}`,
    
    peerreview: {
      display: true, // set to false to hide this section
      title: "Peer-reviewed articles",
      articles: [
        {
          title: <>[3] <a href='https://arxiv.org/abs/2312.00683'>Anharmonic motion of a trapped ion under the influence of different drives in an ion-nanomechanical hybrid system</a></>,
          authors: "Adrien Poindron, Stefan Willitsch",
          journal: <em>ArXiV</em>,
          year: "2023",
          url: "https://arxiv.org/abs/2312.00683",
        },
        {
          title: <>[2] <a href='https://journals.aps.org/pra/abstract/10.1103/PhysRevA.108.013109'>Thermal bistability in laser-cooled trapped ions</a></>,
          authors: "Adrien Poindron, Jofre Pedregosa-Gutierrez, Caroline Champenois",
          journal: <em>Phys. Rev. A</em>,
          year: "2023",
          url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.108.013109",
        },
        {
          title: <>[1] <a href='https://pubs.aip.org/aip/jcp/article-abstract/154/18/184203/200291/Non-destructive-detection-of-large-molecules'>Non-destructive detection of large molecules without mass limitation</a></>,
          authors: "Adrien Poindron, Jofre Pedregosa-Gutierrez, Christophe Jouvet, Martina Knoop, Caroline Champenois",
          journal: <em>J. of Chem. Phys.</em>,
          year: "2021",
          url: "https://pubs.aip.org/aip/jcp/article-abstract/154/18/184203/200291/Non-destructive-detection-of-large-molecules",
        },
      ],
    },

    arxiv: {
      display: true, // set to false to hide this section
      title: "Preprints on arXiv",
      articles: [
        {
          title: <a href='https://arxiv.org/abs/2312.00683'>Heating rate in a linear quadrupole trap</a>,
          authors: "Adrien Poindron, Jofre Pedregosa-Gutierrez, Caroline Champenois",
          journal: <em>ArXiV</em>,
          year: "2023",
          url: "https://arxiv.org/abs/2312.00683",
        },
      ],
    },

    generalaudience: {
      display: true, // set to false to hide this section
      title: "General audience",
      articles : [
        {
          title: <a href="https://theconversation.com/les-debuts-de-la-physique-quantique-ou-comment-admettre-elegamment-que-lon-a-tort-192752">Images de science : Les débuts de la quantique, ou comment admettre élégamment que l’on a tort</a>,
          authors: "Adrien Poindron",
          journal: <em>The Conversation</em>,
          year: "2022",
          url: "https://theconversation.com/les-debuts-de-la-physique-quantique-ou-comment-admettre-elegamment-que-lon-a-tort-192752",
        }
      ]
    },
  };
  return (       
    <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {publications.display && (
            <>
              <Heading as="h2" id={publications.title} variant="display-strong-s" marginBottom="m">
                {publications.peerreview.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {publications.peerreview.articles.map((article, index) => (
                  <Column key={`${article.title}-${index}`} fillWidth gap="4">
                    <Text id={article.title} variant="heading-strong-l">
                      {article.title}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {article.authors} • {article.journal} • {article.year}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {publications.display && (
            <>
              <Heading as="h2" id={publications.title} variant="display-strong-s" marginBottom="m">
                {publications.arxiv.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {publications.arxiv.articles.map((article, index) => (
                  <Column key={`${article.title}-${index}`} fillWidth gap="4">
                    <Text id={article.title} variant="heading-strong-l">
                      {article.title}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {article.authors} • {article.journal} • {article.year}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {publications.display && (
            <>
              <Heading as="h2" id={publications.title} variant="display-strong-s" marginBottom="m">
                {publications.generalaudience.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {publications.generalaudience.articles.map((article, index) => (
                  <Column key={`${article.title}-${index}`} fillWidth gap="4">
                    <Text id={article.title} variant="heading-strong-l">
                      {article.title}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {article.authors} • {article.journal} • {article.year}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
  );
};