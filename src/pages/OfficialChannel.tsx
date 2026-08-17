
import { PageContent } from "@/components/PageContent";

export default function OfficialChannel() {
  return (
    <PageContent title="Official Channel" emoji="🔥">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Connect With Us</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Stay updated with the latest news, announcements, and community events through our official channels.
          </p>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Official Website</h3>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-blue-500 mb-2">🌐 Website</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Visit our official website for the latest news, game downloads, and detailed information about our ecosystem.
            </p>
            <a href="https://bombcrypto.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
              https://bombcrypto.io/
            </a>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Social Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-blue-500 mb-2">🐦 Twitter</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Follow us for real-time updates and announcements
              </p>
              <a href="https://twitter.com/BombCryptoGame" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                @BombCryptoGame
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-blue-600 mb-2">📘 Telegram</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Get instant notifications and community updates
              </p>
              <a href="https://t.me/BombCryptoGroup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                BombCryptoGroup
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-purple-500 mb-2">💬 Discord</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Join our community for discussions and support
              </p>
              <a href="https://discord.gg/P4R9Sn2HQA" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline text-sm">
                Join Discord
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-red-500 mb-2">📺 YouTube</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Watch gameplay videos and development updates
              </p>
              <a href="https://www.youtube.com/@bombcrypto_bcoin" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline text-sm">
                @bombcrypto_bcoin
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">🎵 TikTok</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Follow us for fun gaming content and updates
              </p>
              <a href="https://www.tiktok.com/@bombcrypto_official" target="_blank" rel="noopener noreferrer" className="text-black hover:underline text-sm">
                @bombcrypto_official
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-purple-600 mb-2">🎮 Twitch</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Watch live streams and gaming sessions
              </p>
              <a href="https://www.twitch.tv/bombcrypto_official" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">
                bombcrypto_official
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-orange-500 mb-2">📰 Substack</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Read our detailed articles and newsletters
              </p>
              <a href="https://bombcrypto.substack.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline text-sm">
                bombcrypto.substack.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
