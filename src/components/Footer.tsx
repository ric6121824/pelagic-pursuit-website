import logoPP from "@/assets/logo-pp.png";
import uniBremenLogo from "@/assets/uni-bremen-logo.png";
import marumLogo from "@/assets/marum-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col items-center gap-6">
      {/* Logos */}
      <div className="flex items-center gap-6">
        <img src={logoPP} alt="Pelagic Pursuit" className="h-8 w-auto brightness-0 invert" />
        <div className="w-px h-6 bg-border" />
        <img src={uniBremenLogo} alt="Universität Bremen" className="h-8 w-auto" />
        <img src={marumLogo} alt="MARUM" className="h-5 w-auto brightness-0 invert" />
      </div>

      <p className="font-body text-sm text-muted-foreground">
        A Master Project at the University of Bremen
      </p>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pelagic Pursuit Team. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
