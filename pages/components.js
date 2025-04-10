import NavBar from '../components/NavBar';
import Button from '../components/Button';
import Card from '../components/Card';

export default function ComponentsPage() {
  return (
    <>
      <NavBar />
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Component Showcase</h1>

        {/* Buttons */}
        <div className="space-x-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Leaderboard">
            Top players this week are earning CGT through strategy and consistency.
          </Card>
          <Card title="Upcoming Tournament">
            Join the weekly trivia + chess challenge for a chance to win rewards.
          </Card>
          <Card title="CGT Docs" footer="Last updated: April 2025">
            Learn how to build your own CryptoGaming Tournament using our protocol.
          </Card>
        </div>
      </main>
    </>
  );
}
