import "./App.css";

function App() {
  return (
    <div className="mainFrame">
      <Head />
      <Clients />
      <Main />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

/* <<<< Раздел шапки, проработка сверху вниз >>>> */

function Head() {
  return (
    <div className="headSection">
      <Space />
      <Menu />
      <Space />
      <Space />
      <HeadTextArea />
    </div>
  );
}

function Space() {
  return <div className="space"></div>;
}

function Menu() {
  return (
    <div className="menu">
      <Logo />
      <Burger />
    </div>
  );
}
function Logo() {
  return (
    <div className="logo">
      <LogoImage />
      <LogoName />
    </div>
  );
}
function LogoName() {
  return <div className="webovio">webovio.</div>;
}
function LogoImage() {
  return (
    <div className="logoSpaceFrame">
      <div className="logoSpace"></div>
    </div>
  );
}

function Burger() {
  return (
    <div className="burger">
      <span className="burgerLine"></span>
      <span className="burgerLine2"></span>
      <span className="burgerLine"></span>
      <span className="burgerLine2"></span>
      <span className="burgerLine"></span>
    </div>
  );
}

function HeadTextArea() {
  return (
    <div className="headTextArea">
      <HeadTextHolder />
    </div>
  );
}

function HeadTextHolder() {
  return (
    <div className="headTextHolder">
      <div className="smallText">A place where</div>
      <div className="largeText">
        A creative agency <br />
        for redemptive
        <br />
        brands
      </div>
      <div className="smallText">
        Anteelo is a leading strategic design firm that builds powerfull digital
        <br />
        solutions for startups and enterprises
      </div>
      <div className="headerRef">
        <div className="headerRefSymbol"></div>
        <a>Get in touch</a>
      </div>
    </div>
  );
}

/* <<<< Основной раздел, проработка сверху вниз >>>> */

function Main() {
  return (
    <div className="main">
      <span className="mainSpan"></span>
      <ProjectsHeader />
      <Project1 />
      <Project2 />
      <Project3 />
      <span className="mainSpan"></span>
      <ResumeBlock />
    </div>
  );
}
function ProjectsHeader() {
  return (
    <div className="projectHeader">
      <div className="projectHeaderText">
        We Have Some
        <br />
        Awsome Projects.
      </div>
      <div className="projectDescriptionText">
        Lorem Ipsum is simply dummy text of the printing and
        <br />
        typesetting industry. Lorem Ipsum has been the industry's
        <br />
        standard dummy text ever since the 1500s,
      </div>
    </div>
  );
}
function Project1() {
  return (
    <div className="projectTemplate">
      <div className="projectImage"></div>
      <div className="projectComment">
        <q className="projectQuote">
          In my history of working with trade show
          <br />
          vendors, I can honestly say that there is not one
          <br />
          company that I've ever worked with that has
          <br />
          better service than Exhibit Systems.
        </q>
        <div className="projectOval">
          <div className="oval"></div>
          <div className="ovalSignature">
            <div className="ovalName">Angel Armstrong</div>
            <div className="ovalPosition">Founder & CEO, Google</div>
          </div>
        </div>
      </div>
      <div className="projectText">
        <div className="projectHeaderText">
          The wall new
          <br />
          Balenciaga.com
        </div>
        <div className="projectDescriptionText">
          This article is floated online with an aim to help you
          <br />
          find the best dvd printing solution.
          <br />
          <br />
          Dvd printing is an importamt feature used by large
          <br />
          and small DVD production houses to print
          <br />
          information on DVDs.
        </div>
        <div className="mainRef">
          <div className="mainRefSymbol"></div>
          <a>See Case Study</a>
        </div>
      </div>
    </div>
  );
}
function Project2() {
  return (
    <div className="projectTemplateReverce">
      <div className="projectImage2"></div>
      <div className="projectCommentRev">
        <q className="projectQuote">
          I know they are going to be honest with me. I
          <br />
          am not going to get a subpar product; I know it
          <br />
          is going to be good. That is the number one
          <br />
          advantage of working with Exhibit Systems.
        </q>
        <div className="projectOval">
          <div className="oval2"></div>
          <div className="ovalSignature">
            <div className="ovalName">Lina Hart</div>
            <div className="ovalPosition">Founder & CEO, Jicc</div>
          </div>
        </div>
      </div>
      <div className="projectTextRev">
        <div className="projectHeaderText">
          Is this the future of
          <br />
          3D model?
        </div>
        <div className="projectDescriptionText">
          While it was just a TV show, that litle speech at the
          <br />
          begining of the original Star Trek show really did do
          <br />
          a good job of capturing our feelings about space.
          <br />
          <br />
          It is those feelings that drive our love of astronomy
          <br />
          and our desire to learn more and more about it.
        </div>
        <div className="mainRef">
          <div className="mainRefSymbol"></div>
          <a>See Case Study</a>
        </div>
      </div>
    </div>
  );
}
function Project3() {
  return (
    <div className="projectTemplate">
      <div className="projectImage3"></div>
      <div className="projectComment">
        <q className="projectQuote">
          Exhibit Systems is not a provider. They are not a
          <br />
          supplier. They are a partner with expertise in
          <br />
          making trade shows effective.
        </q>
        <div className="projectOval">
          <div className="oval3"></div>
          <div className="ovalSignature">
            <div className="ovalName">Eunice Oliver</div>
            <div className="ovalPosition">Founder & CEO, Zeem</div>
          </div>
        </div>
      </div>
      <div className="projectText">
        <div className="projectHeaderText">
          Is this the future of
          <br />
          Online Booking
        </div>
        <div className="projectDescriptionText">
          You should be able to find several indispensable
          <br />
          facts about motivation in the following paragraphs.
          <br />
          <br />
          If there's at least one fact you didn't know before,
          <br />
          imagine the difference ir might make.
        </div>
        <div className="mainRef">
          <div className="mainRefSymbol"></div>
          <a>See Case Study</a>
        </div>
      </div>
    </div>
  );
}
function ResumeBlock() {
  return (
    <div className="resumeBlock">
      <ResumeHeader />
      <div className="horizontalFull">
        <ResumeElement
          text1={
            <>
              PRODUCT
              <br />
              DESIGN SPRINT
            </>
          }
          text2={
            <>
              A five-day workshop that
              <br />
              will help you answer crucial
              <br />
              business questions
            </>
          }
        />
        <ResumeElement
          text1={
            <>
              SCOPING
              <br />
              SESSION
            </>
          }
          text2={
            <>
              A worshop aimed at
              <br />
              shaping your business
              <br />
              idea, answering questions
              <br />
              regarding project planning
            </>
          }
        />
        <ResumeElement
          text1={
            <>
              UX
              <br />
              REVIEW
            </>
          }
          text2={
            <>
              An evaluation which will
              <br />
              help you radically improve
              <br />
              your product
            </>
          }
        />
        <ResumeElement
          text1={
            <>
              CODE
              <br />
              REVIEW
            </>
          }
          text2={
            <>
              Do you know wht one of
              <br />
              the key secrets of success
              <br />
              is what makes people
              <br />
              successful in business
            </>
          }
        />
      </div>
    </div>
  );
}

function ResumeHeader() {
  return (
    <div className="projectHeaderText">
      Deation & Evaluation - Best Way
      <br />
      to Kick off Your Product Idea
    </div>
  );
}
function ResumeElement({ text1, text2 }) {
  return (
    <div className="resumeElement">
      <div className="ResumeElementHeader">{text1}</div>
      <div className="ResumeElementText">{text2}</div>
      <div className="mainRef">
        <div className="mainRefSymbol"></div>
        <a>Read more</a>
      </div>
    </div>
  );
}

/* <<<< Нижний раздел, проработка сверху вниз >>>> */

function Footer() {
  return (
    <div className="footer">
      <div className="footerFrame">
        <PhoneAddress />
        <span className="footerSpan"></span>
        <Info />
        <span className="footerSpan"></span>
        <FooterWebovio />
      </div>
    </div>
  );
}

function PhoneAddress() {
  return (
    <div className="phoneAddress">
      <ContactBlock name={<>Pnone</>} value={<>+32 50 31 28 32</>} />
      <ContactBlock
        name={<>Address</>}
        value={<>491 Merlin Crest Suite 963</>}
      />
    </div>
  );
}
function ContactBlock({ name, value }) {
  return (
    <div className="contactBlock">
      <div className="footerSmall">{name}</div>
      <div className="footerBig">{value}</div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      <InfoBlock
        title={"SERVICES"}
        args={[
          "Strategy Design",
          "Product Design",
          "Content Strutrgy",
          "Brand Strategy",
          "Development",
        ]}
      />
      <InfoBlock
        title={"HELP AND ADVICE"}
        args={["How it works", "Contact Support", "Privacy Policy", "FAQ"]}
      />
      <InfoBlock
        title={"COMPANY"}
        args={["About", "Blog", "Contacts", "Jobs"]}
      />
      <span className="footerSpanV"></span>
      <InfoBlock2 />
    </div>
  );
}

function InfoBlock({ title, args }) {
  return (
    <div className="infoBlock">
      <div className="footerBig">{title}</div>
      {args.map((item) => (
        <div className="footerSmall" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
function InfoBlock2() {
  return (
    <div>
      <div className="footerBig">GET IN TOUCH</div>
      <div className="footerSmall">
        Feel free to get in touch with us
        <br />
        via email
      </div>
      <div className="footerLarge">info.webovio@gmail.com</div>
      <div className="footerSymbols">
        <div className="socialRound1"></div>
        <div className="socialRound1"></div>
        <div className="socialRound1"></div>
        <div className="socialRound1"></div>
      </div>
    </div>
  );
}

function FooterWebovio() {
  return (
    <div className="info1">
      <Logo />
      <div className="footerExtraSmall">
        © 2020@webovio. All Rights Reserved.
      </div>
    </div>
  );
}

/* <<<< Раздел со вставками, проработка сверху вниз >>>> */

function Clients() {
  return (
    <div className="clientsFrame">
      <div className="clients">
        <div className="client1"></div>
        <div className="client2"></div>
        <div className="client3"></div>
        <div className="client4"></div>
        <div className="client5"></div>
      </div>
      <QuoteBlock />
    </div>
  );
}
function QuoteBlock() {
  return (
    <div className="quoteFrame">
      <QuoteTextBlock />
      <QuoteText />
    </div>
  );
}
function QuoteTextBlock() {
  return (
    <div className="quoteFrameText">
      <div className="mainSmallText">What we do for you</div>
      <div className="mainHeaderText">
        Strategy. Design
        <br />
        Content. Texhnology
        <br />
        Development
      </div>
      <div className="mainSmallText">
        There's no secret sause, no wizzard behind the curtain. What
        <br />
        makes Aerolab tick is an interdisciplinaty team with a<br />
        framework that fosters candid collaboration.
      </div>
      <div className="mainRef">
        <div className="mainRefSymbol"></div>
        <a>More know about us</a>
      </div>
    </div>
  );
}
function QuoteText() {
  return (
    <div className="quoteFrameText1">
      <div className="quote">
        With More than 10 years of
        <br /> Knowledge and Expertise we
        <br />
        Design and Code Websites and
        <br />
        Apps, We Build Brands and Help
        <br />
        Them succeed
      </div>
      <div className="ovalHolderMain">
        <div className="ovalImageMain"></div>
        <div className="ovalSignature">
          <div className="quoteName">Genevieve Rodriquez</div>
          <div className="quotePosition">Founder & CEO, Webovio</div>
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <div className="mainHeaderTextLarge">
        Let's make something
        <br />
        amazing together.
      </div>
      <div className="mainRef">
        <div className="mainRefSymbol"></div>
        <a>Let's get started</a>
      </div>
    </div>
  );
}
