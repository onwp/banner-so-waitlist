import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Hey, {userFirstname}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://banner.so/waitlist-logo.png`}
          width="48"
          height="48"
          alt="Banner.so"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for Banner.so!
          I'm Serhat, the developer behind this project. I'm glad to
          have you on board.
        </Text>
        <Text style={paragraph}>
          I'll keep you posted on the progress and notify you as soon as it's
          ready for you to use. In the meantime, if you have any questions or
          feedback, don't hesitate to reach out.
          — I'm here to listen!
        </Text>
        <Text style={paragraph}>
          You can also follow me on X/Twitter for updates:{" "}
          <a href="https://x.com/serhataksakall" style={link}>
            @serhataksakall
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          Serhat
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you joined the waitlist for Banner.so.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  padding: "32px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #eaeaea",
  maxWidth: "560px",
};

const logo = {
  margin: "0 auto",
  marginBottom: "24px",
};

const greeting = {
  fontSize: "20px",
  lineHeight: "28px",
  color: "#111111",
  fontWeight: "600",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#333333",
  marginBottom: "24px",
};

const link = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "500",
};

const signOff = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#333333",
  marginTop: "32px",
};

const hr = {
  borderColor: "#eaeaea",
  margin: "32px 0",
};

const footer = {
  color: "#666666",
  fontSize: "13px",
  lineHeight: "20px",
};
