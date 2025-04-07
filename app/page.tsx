import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/bug-reports/1">Direct link to bug report 1</Link>
      </li>
      <li>
        <Link href="/committee-types/1/1">Link to committee</Link>
      </li>
    </ul>
  );
}
