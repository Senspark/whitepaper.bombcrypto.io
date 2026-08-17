
import { PageContent } from "@/components/PageContent";

export default function Team() {
  return (
    <PageContent title="Team" emoji="🏆">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-rose-500 mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Senspark is an indie game developer founded in 2011 focusing on building casual mobile games for over a decade and has recently transitioned into Blockchain Gaming. With more than 10 years of experience and a passion for building top-quality games, we believe that we can be the next successful blockchain gaming company. Senspark has around 30 full-time employees and is based in Ho Chi Minh City, Vietnam.
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/2e51e01a-46c3-409f-8258-51d7fb20f271.png" 
            alt="Team Logo" 
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </PageContent>
  );
}
