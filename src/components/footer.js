import React, { useState, useEffect } from 'react';
import { FormattedIcon } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const REPOSITORY_CREDITS = [
  {
    user: 'Brittany Chiang',
    repo: 'bchiang7/v4',
    year: 'Designed & Built',
    url: 'https://github.com/bchiang7/v4',
  },
  {
    user: 'Yashita Namdeo',
    repo: 'yashitanamdeo/yashitanamdeo.github.io',
    year: 'Forked and revised in 2021',
    url: 'https://github.com/yashitanamdeo/yashitanamdeo.github.io',
  },
  {
    user: 'Leonardo Klein',
    repo: 'leonardokr/leonardokr.github.io',
    year: 'Forked and revised in 2025',
    url: 'https://github.com/leonardokr/leonardokr.github.io',
  },
];

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.lightSlate};
  padding: 10px;
`;
const StyledGitHubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;
const StyledCreditItem = styled.div`
  margin-bottom: 4px;
`;

const Footer = () => {
  const [githubInfos, setGitHubInfos] = useState(
    REPOSITORY_CREDITS.map(() => ({ stars: null, forks: null })),
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    Promise.all(
      REPOSITORY_CREDITS.map(r =>
        fetch(`https://api.github.com/repos/${r.repo}`)
          .then(response => response.json())
          .then(json => ({
            stars: json.stargazers_count,
            forks: json.forks_count,
          }))
          .catch(() => ({ stars: null, forks: null })),
      ),
    ).then(setGitHubInfos);
  }, []);

  return (
    <StyledContainer>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }) => (
              <li key={url}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  <FormattedIcon name={name} />
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
      <StyledMetadata tabIndex="-1">
        {REPOSITORY_CREDITS.map((r, i) => (
          <StyledCreditItem key={r.repo}>
            <StyledGitHubLink href={r.url} target="_blank" rel="nofollow noopener noreferrer">
              {r.year} by {r.user}
            </StyledGitHubLink>
            {githubInfos[i].stars !== null && githubInfos[i].forks !== null && (
              <StyledGitHubInfo>
                <span>
                  <FormattedIcon name="Star" />
                  <span>{githubInfos[i].stars.toLocaleString()}</span>
                </span>
                <span>
                  <FormattedIcon name="Fork" />
                  <span>{githubInfos[i].forks.toLocaleString()}</span>
                </span>
              </StyledGitHubInfo>
            )}
          </StyledCreditItem>
        ))}
      </StyledMetadata>
    </StyledContainer>
  );
};

export default Footer;
