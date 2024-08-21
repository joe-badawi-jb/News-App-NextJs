export default function ArchiveLayout({ archive, latest }) {
  // insted of children we have the names of the parallel routes (starting with @)
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
