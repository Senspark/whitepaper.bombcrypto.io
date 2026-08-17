import { PageContent } from "@/components/PageContent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SmartContracts() {
  const contractData = [
    {
      network: "BNB",
      standard: "BEP-20", 
      description: "BCOIN Token",
      address: "0x00e1656e45f18ec6747f5a8496fd39b50b38396d",
      addressUrl: "https://bscscan.com/address/0x00e1656e45f18ec6747F5a8496Fd39B50b38396D",
      audit: "Verichains Team",
      auditUrl: "https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Public%20Audit%20Report%20-%20BCoin%20Token%20-%20v1.1.pdf"
    },
    {
      network: "Polygon",
      standard: "ERC-20",
      description: "BCOIN Token", 
      address: "0xb2c63830d4478cb331142fac075a39671a5541dc",
      addressUrl: "https://polygonscan.com/token/0xb2c63830d4478cb331142fac075a39671a5541dc",
      audit: "PeckShield",
      auditUrl: "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-ERC20-Bomb-v1.0.pdf"
    },
    {
      network: "TON",
      standard: "Jetton",
      description: "BCOIN Token",
      address: "EQClyeWq9hiaPJRxtKRZhBNrznGNiDouXZy5TWs1QQ2DoiHn",
      addressUrl: "https://tonviewer.com/EQClyeWq9hiaPJRxtKRZhBNrznGNiDouXZy5TWs1QQ2DoiHn",
      audit: "NA",
      auditUrl: ""
    },
    {
      network: "SOL",
      standard: "SPL",
      description: "BCOIN Token",
      address: "VWuKbCVXQbw1Rqvw6YzczfD85u5fDbBv9b7eWSiY3BL",
      addressUrl: "https://solscan.io/token/VWuKbCVXQbw1Rqvw6YzczfD85u5fDbBv9b7eWSiY3BL",
      audit: "NA",
      auditUrl: ""
    },
    {
      network: "BNB",
      standard: "BEP-20",
      description: "SEN Token",
      address: "0xb43Ac9a81eDA5a5b36839d5b6FC65606815361b0",
      addressUrl: "https://bscscan.com/token/0xb43Ac9a81eDA5a5b36839d5b6FC65606815361b0",
      audit: "Verichains Team",
      auditUrl: "https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Public%20Audit%20Report%20-%20Senspark%20Token%20-%20v1.0.pdf"
    },
    {
      network: "Polygon",
      standard: "ERC-20",
      description: "SEN Token",
      address: "0xfe302b8666539d5046cd9aa0707bb327f5f94c22",
      addressUrl: "https://polygonscan.com/token/0xfe302b8666539d5046cd9aa0707bb327f5f94c22",
      audit: "Verichains Team",
      auditUrl: "https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Public%20Audit%20Report%20-%20Senspark%20Token%20v2%20-%20v1.0.pdf"
    },
    {
      network: "BNB",
      standard: "ERC-721",
      description: "BHero",
      address: "0x30cc0553f6fa1faf6d7847891b9b36eb559dc618",
      addressUrl: "https://bscscan.com/address/0x30cc0553f6fa1faf6d7847891b9b36eb559dc618",
      audit: "None",
      auditUrl: ""
    },
    {
      network: "Polygon",
      standard: "ERC-721",
      description: "BHero",
      address: "0xd8a06936506379dbbe6e2d8ab1d8c96426320854",
      addressUrl: "https://polygonscan.com/address/0xd8a06936506379dbbe6e2d8ab1d8c96426320854",
      audit: "None",
      auditUrl: ""
    },
    {
      network: "BNB",
      standard: "ERC-721",
      description: "BHouse",
      address: "0xea3516fEB8F3e387eeC3004330Fd30Aff615496A",
      addressUrl: "https://bscscan.com/address/0xea3516fEB8F3e387eeC3004330Fd30Aff615496A",
      audit: "None",
      auditUrl: ""
    },
    {
      network: "Polygon",
      standard: "ERC-721",
      description: "BHouse",
      address: "0x2d5f4ba3e4a2d991bd72edbf78f607c174636618",
      addressUrl: "https://polygonscan.com/address/0x2d5f4ba3e4a2d991bd72edbf78f607c174636618",
      audit: "None",
      auditUrl: ""
    }
  ];

  const otherContractData = [
    {
      network: "BNB",
      function: "BCoin Stake",
      address: "0x1CF220128D22B9c272260c6B9Ff84Eed77Dba6F1",
      link: "https://bscscan.com/address/0x1cf220128d22b9c272260c6b9ff84eed77dba6f1",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "BCoin Stake",
      address: "0x94d4B83161D6d4C5f89D884f3EF569f000cc065f",
      link: "https://polygonscan.com/address/0x94d4b83161d6d4c5f89d884f3ef569f000cc065f#code",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "Sen Stake",
      address: "0x4FD4a6905eF6b0084af1e4912bB81ED41A1bDa21",
      link: "https://bscscan.com/address/0x4fd4a6905ef6b0084af1e4912bb81ed41a1bda21",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "Sen Stake",
      address: "0x7fEE03e047A7d4e0f99d343624fe650fcD2E9250",
      link: "https://polygonscan.com/address/0x7fee03e047a7d4e0f99d343624fe650fcd2e9250#writeProxyContract",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "BHero S",
      address: "0x9fb9b7349279266c85c0C9dd264D71d2a4B79AB4",
      link: "https://bscscan.com/address/0x9fb9b7349279266c85c0c9dd264d71d2a4b79ab4",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "BHero S",
      address: "0x27313635E6B7AA3CC8436E24BE2317D4A0e56BeB",
      link: "https://polygonscan.com/address/0x27313635E6B7AA3CC8436E24BE2317D4A0e56BeB",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "BHero Stake",
      address: "0x053282c295419E67655a5032A4DA4e3f92D11F17",
      link: "https://bscscan.com/address/0x053282c295419E67655a5032A4DA4e3f92D11F17#writeProxyContract",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "BHero Stake",
      address: "0x810570AA7e16cF14DefD69D4C9796f3c1Abe2d13",
      link: "https://polygonscan.com/address/0x810570aa7e16cf14defd69d4c9796f3c1abe2d13#code",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "BHero Market",
      address: "0x376A10E7f125A4E0a567cc08043c695Cd8EDd704",
      link: "https://bscscan.com/address/0x376A10E7f125A4E0a567cc08043c695Cd8EDd704",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "BHero Market",
      address: "0xf3a7195920519f8A22cDf84EBB9F74342abE9812",
      link: "https://polygonscan.com/address/0xf3a7195920519f8a22cdf84ebb9f74342abe9812#writeProxyContract",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "BHouse Market",
      address: "0x049896f350C802CD5C91134E5f35Ec55FA8f0108",
      link: "https://bscscan.com/address/0x049896f350C802CD5C91134E5f35Ec55FA8f0108",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "BHouse Market",
      address: "0xBb5966daF83ec4D3f168671a464EB18430EeA3be",
      link: "https://polygonscan.com/address/0xbb5966daf83ec4d3f168671a464eb18430eea3be",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "Bridge BCoin",
      address: "0x44ADc72f9b24692838FE32e9200034dD1a7c0C63",
      link: "https://bscscan.com/address/0x44ADc72f9b24692838FE32e9200034dD1a7c0C63",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "Bridge BCoin",
      address: "0x6864C7370AF52A68677041E1Eb88f38c729ff315",
      link: "https://polygonscan.com/address/0x6864C7370AF52A68677041E1Eb88f38c729ff315",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "Bridge SEN",
      address: "0xbD290fbB695090EBa8d3e33Ed18d41e9A36Fbe26",
      link: "https://bscscan.com/address/0xbd290fbb695090eba8d3e33ed18d41e9a36fbe26#code",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "Bridge SEN",
      address: "0x450d5b5606A77BDFAbed96CD47d10833AB346686",
      link: "https://polygonscan.com/address/0x450d5b5606a77bdfabed96cd47d10833ab346686#writeProxyContract",
      linkText: "PolygonScan"
    },
    {
      network: "BNB",
      function: "Deposit",
      address: "0xad5669fD304aF930C04B5bc7541e5285b638169d",
      link: "https://bscscan.com/address/0xad5669fD304aF930C04B5bc7541e5285b638169d",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "Deposit",
      address: "0x14EDbb72bd3318F84345bbe816bDef37814AC568",
      link: "https://polygonscan.com/address/0x14EDbb72bd3318F84345bbe816bDef37814AC568",
      linkText: "PolygonScan"
    },
    {
      network: "TON",
      function: "Deposit",
      address: "UQBwoPsG1B0_eA59AR_7ORa8d30JSRy7kWwQLqFZ4iIRxgLq",
      link: "https://tonscan.org/address/UQBwoPsG1B0_eA59AR_7ORa8d30JSRy7kWwQLqFZ4iIRxgLq",
      linkText: "TONScan"
    },
    {
      network: "Solana",
      function: "Deposit",
      address: "7aujakweAK1WFyJgqotHNSuyDAGSREwyppkaruQD4gMw",
      link: "https://solscan.io/account/7aujakweAK1WFyJgqotHNSuyDAGSREwyppkaruQD4gMw",
      linkText: "SolScan"
    },
    {
      network: "BNB",
      function: "Master Reward Pool",
      address: "0x860016dc50f9980b94CbEEe4CB70f5E13c015145",
      link: "https://bscscan.com/address/0x860016dc50f9980b94cbeee4cb70f5e13c015145#writeProxyContract",
      linkText: "BscScan"
    },
    {
      network: "Polygon",
      function: "Master Reward Pool",
      address: "0xb99633944774c5Fec130d21C7C7e1aB817201a54",
      link: "https://polygonscan.com/address/0xb99633944774c5fec130d21c7c7e1ab817201a54#writeProxyContract",
      linkText: "PolygonScan"
    }
  ];

  const githubReportData = [
    {
      network: "BNB",
      token: "BCOIN",
      sourceCode: "https://github.com/Senspark/bombcrypto",
      linkText: "https://github.com/Senspark/bombcrypto"
    },
    {
      network: "Polygon",
      token: "BCOIN", 
      sourceCode: "https://github.com/Senspark/contract-bomb-polygon",
      linkText: "https://github.com/Senspark/contract-bomb-polygon"
    },
    {
      network: "BNB",
      token: "SEN",
      sourceCode: "https://github.com/Senspark/contract-sen",
      linkText: "https://github.com/Senspark/contract-sen"
    },
    {
      network: "Polygon",
      token: "SEN",
      sourceCode: "https://github.com/Senspark/contract-sen", 
      linkText: "https://github.com/Senspark/contract-sen"
    }
  ];

  return (
    <PageContent title="Smart Contract and Github Report" emoji="📑">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Main Smart Contract</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Network</TableHead>
                  <TableHead>Token Standard</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Audit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contractData.map((contract, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{contract.network}</TableCell>
                    <TableCell>{contract.standard}</TableCell>
                    <TableCell>{contract.description}</TableCell>
                    <TableCell>
                      <a 
                        href={contract.addressUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 transition-colors underline break-all"
                      >
                        {contract.address}
                      </a>
                    </TableCell>
                    <TableCell>
                      {contract.audit !== "NA" && contract.audit !== "None" && contract.auditUrl ? (
                        <a 
                          href={contract.auditUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:text-orange-600 transition-colors underline"
                        >
                          {contract.audit}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{contract.audit}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Other Smart Contract</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Network</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                  <TableHead className="font-semibold">Address</TableHead>
                  <TableHead className="font-semibold">Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {otherContractData.map((contract, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{contract.network}</TableCell>
                    <TableCell>{contract.function}</TableCell>
                    <TableCell className="font-mono text-sm break-all">{contract.address}</TableCell>
                    <TableCell>
                      <a 
                        href={contract.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 transition-colors underline"
                      >
                        {contract.linkText}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Github Report</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Network</TableHead>
                  <TableHead className="font-semibold">Token</TableHead>
                  <TableHead className="font-semibold">Source Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {githubReportData.map((repo, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{repo.network}</TableCell>
                    <TableCell className="font-medium">{repo.token}</TableCell>
                    <TableCell>
                      <a 
                        href={repo.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 transition-colors underline break-all"
                      >
                        {repo.linkText}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Smart Contract Security</h3>
          <p className="text-muted-foreground leading-relaxed">
            All smart contracts undergo rigorous security audits and testing to ensure the safety of user funds and game assets. Our contracts are verified and publicly available for community review.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Open Source Development</h3>
          <p className="text-muted-foreground leading-relaxed">
            Visit our GitHub repositories to explore the codebase, contribute to development, and stay updated with the latest technical improvements and features.
          </p>
        </section>
      </div>
    </PageContent>
  );
}
