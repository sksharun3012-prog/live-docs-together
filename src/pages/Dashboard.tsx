import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Users, 
  Clock,
  Star,
  Folder,
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Document {
  id: string;
  title: string;
  lastEdited: string;
  collaborators: number;
  starred: boolean;
}

const mockDocuments: Document[] = [
  { id: "1", title: "Q1 Project Roadmap", lastEdited: "2 hours ago", collaborators: 3, starred: true },
  { id: "2", title: "Meeting Notes - Product Sync", lastEdited: "Yesterday", collaborators: 5, starred: false },
  { id: "3", title: "Design System Guidelines", lastEdited: "3 days ago", collaborators: 2, starred: true },
  { id: "4", title: "API Documentation", lastEdited: "1 week ago", collaborators: 4, starred: false },
  { id: "5", title: "Marketing Strategy 2024", lastEdited: "2 weeks ago", collaborators: 6, starred: false },
];

const Dashboard = () => {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStar = (id: string) => {
    setDocuments(docs =>
      docs.map(doc =>
        doc.id === id ? { ...doc, starred: !doc.starred } : doc
      )
    );
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-soft">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">DocSync</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">
            <FileText className="w-4 h-4" />
            All Documents
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary/50 text-sm transition-colors">
            <Star className="w-4 h-4" />
            Starred
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary/50 text-sm transition-colors">
            <Folder className="w-4 h-4" />
            Folders
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary/50 text-sm transition-colors">
            <Users className="w-4 h-4" />
            Shared with me
          </button>
        </nav>

        <div className="p-4 border-t border-border space-y-1">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary/50 text-sm transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <Link to="/" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary/50 text-sm transition-colors">
            <LogOut className="w-4 h-4" />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border/50 px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50 border-0"
                />
              </div>
            </div>
            <Link to="/editor/new">
              <Button>
                <Plus className="w-4 h-4" />
                New Document
              </Button>
            </Link>
          </div>
        </header>

        {/* Documents grid */}
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground">All Documents</h1>
            <p className="text-sm text-muted-foreground mt-1">{filteredDocuments.length} documents</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* New document card */}
            <Link
              to="/editor/new"
              className="document-card flex flex-col items-center justify-center min-h-[180px] border-dashed hover:border-primary/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Create new document
              </span>
            </Link>

            {/* Document cards */}
            {filteredDocuments.map((doc) => (
              <Link
                key={doc.id}
                to={`/editor/${doc.id}`}
                className="document-card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleStar(doc.id);
                      }}
                      className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          doc.starred
                            ? "fill-yellow-500 text-yellow-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
                
                <h3 className="font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {doc.lastEdited}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {doc.collaborators}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
