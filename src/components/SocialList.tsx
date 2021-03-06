import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Newsletter from "../assets/newsletter-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Newsletter"
        href={`https://buttondown.email/${config.buttondown_account}`}
        target="_blank"
        rel="noopener"
      >
        <Newsletter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>

      <a
        title="Newsletter"
        href={`https://buttondown.email/alitarraf`}
        target="_blank"
        rel="noopener"
      >
        <Newsletter width={24} height={24} fill={"#222"} />
      </a>

      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
