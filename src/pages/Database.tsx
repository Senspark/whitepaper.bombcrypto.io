import { PageContent } from "@/components/PageContent";

export default function Database() {
  return (
    <PageContent title="Database" emoji="🗄️">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-emerald-500 mb-4">Database Snapshots</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A snapshot of the Bombcrypto game database is published every day. The newest 5 snapshots are kept and older ones are removed.
          </p>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Snapshot List</h3>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">
              Each snapshot is listed with its date, size and sha256 checksum. A <code>.manifest.json</code> beside each file lists what is inside.
            </p>
            <a href="https://database.bombcrypto.io/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
              https://database.bombcrypto.io/index.html
            </a>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">How to Download &amp; Verify</h3>
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`wget -c https://database.bombcrypto.io/<snapshot>.tar
wget https://database.bombcrypto.io/<snapshot>.tar.sha256
sha256sum -c <snapshot>.tar.sha256`}</code>
          </pre>
        </section>
      </div>
    </PageContent>
  );
}
