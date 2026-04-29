"""Generate 5 test PDF reports on the Desktop for drag-and-drop testing."""
import os
import datetime

DESKTOP = os.path.expanduser(r"~\Desktop")

reports = [
    {
        "filename": "Annual Report 2025.pdf",
        "title": "Annual Report 2025",
        "content": (
            "Apex Capital Management Ltd.\n"
            "Annual Report 2025\n"
            "=" * 50 + "\n\n"
            "Dear Shareholders,\n\n"
            "We are pleased to present the Annual Report for the fiscal year 2025. "
            "Apex Capital achieved a 23.7% return across all managed portfolios, "
            "significantly outperforming the benchmark S&P 500 return of 12.8%.\n\n"
            "Key Financial Highlights:\n"
            "  - Assets Under Management (AUM): $48.2 Billion\n"
            "  - Net Revenue: $3.8 Billion (+18.2% YoY)\n"
            "  - Net Profit Margin: 34.6%\n"
            "  - Total Client Accounts: 12,450 (+22% YoY)\n\n"
            "Quantitative Strategies Fund led performance with a 31.2% annual return, "
            "driven by our proprietary machine learning models capturing market "
            "inefficiencies across global equity and fixed income markets.\n\n"
            "Sincerely,\n"
            "James Chen, CEO\n"
            "Apex Capital Management Ltd."
        ),
    },
    {
        "filename": "Q1 2026 Quarterly Report.pdf",
        "title": "Q1 2026 Quarterly Report",
        "content": (
            "Apex Capital Management Ltd.\n"
            "Q1 2026 Quarterly Performance Report\n"
            "=" * 50 + "\n\n"
            "Executive Summary:\n\n"
            "The first quarter of 2026 delivered strong results across all strategies. "
            "Total portfolio return reached 8.4% for Q1, driven by exceptional "
            "performance in AI-driven quantitative strategies.\n\n"
            "Performance by Strategy:\n"
            "  - Quantitative Strategies Fund: +12.1%\n"
            "  - Sustainable Investing Fund: +7.3%\n"
            "  - Risk-Managed Solutions: +5.8%\n"
            "  - Wealth Management Portfolios: +6.9%\n\n"
            "Market volatility in February created tactical opportunities that our "
            "algorithms successfully exploited. The Green Energy sub-fund saw "
            "particularly strong inflows of $2.1B following favorable policy "
            "announcements in the EU and Asia-Pacific regions.\n\n"
            "Risk metrics remain well within target ranges with Value-at-Risk (VaR) "
            "at 2.1% and Sharpe Ratio of 2.4 across the composite portfolio.\n\n"
            "Report Date: March 31, 2026"
        ),
    },
    {
        "filename": "Audited Financial Statements 2025.pdf",
        "title": "Audited Financial Statements 2025",
        "content": (
            "Apex Capital Management Ltd.\n"
            "Audited Financial Statements\n"
            "For the Year Ended December 31, 2025\n"
            "=" * 50 + "\n\n"
            "Independent Auditor's Report\n\n"
            "We have audited the accompanying financial statements of Apex Capital "
            "Management Ltd., which comprise the balance sheet as of December 31, 2025, "
            "and the related statements of income, changes in equity, and cash flows "
            "for the year then ended.\n\n"
            "Audit Opinion: UNQUALIFIED\n\n"
            "In our opinion, the financial statements present fairly, in all material "
            "respects, the financial position of Apex Capital Management Ltd. as of "
            "December 31, 2025, in accordance with International Financial Reporting "
            "Standards (IFRS).\n\n"
            "Balance Sheet Highlights:\n"
            "  - Total Assets: $12.4 Billion\n"
            "  - Total Liabilities: $3.1 Billion\n"
            "  - Shareholders' Equity: $9.3 Billion\n"
            "  - Cash & Equivalents: $2.8 Billion\n"
            "  - Debt-to-Equity Ratio: 0.33\n\n"
            "Auditor: PricewaterhouseCoopers LLP\n"
            "Date: February 28, 2026"
        ),
    },
    {
        "filename": "SEC Form ADV 2026.pdf",
        "title": "SEC Form ADV (2026 Update)",
        "content": (
            "UNITED STATES\n"
            "SECURITIES AND EXCHANGE COMMISSION\n"
            "Washington, D.C. 20549\n\n"
            "FORM ADV\n"
            "Uniform Application for Investment Adviser Registration\n"
            "Annual Updating Amendment\n"
            "=" * 50 + "\n\n"
            "Firm Name: Apex Capital Management Ltd.\n"
            "CRD Number: 987654\n"
            "SEC File Number: 801-12345\n"
            "Fiscal Year End: December 31\n\n"
            "Item 1 - Identifying Information:\n"
            "  Principal Office: 888 Financial District, Shanghai, China 200120\n"
            "  Contact Phone: +86 21 6888 8888\n"
            "  Website: www.apexcapital.com\n\n"
            "Item 5 - Information About Advisory Business:\n"
            "  - Registered Investment Adviser\n"
            "  - Total Regulatory AUM: $48.2 Billion\n"
            "  - Total Number of Clients: 12,450\n"
            "  - Types of Clients: Individuals, High-Net-Worth, Institutions, Pools\n\n"
            "Item 11 - Disclosure Information:\n"
            "  No disciplinary history to report.\n"
            "  No material civil, criminal, or regulatory actions.\n\n"
            "Filing Date: February 15, 2026"
        ),
    },
    {
        "filename": "2026 Investor Day Presentation.pdf",
        "title": "2026 Investor Day Presentation",
        "content": (
            "Apex Capital Management Ltd.\n"
            "2026 Investor Day Presentation\n"
            "January 20, 2026 | Shanghai\n"
            "=" * 50 + "\n\n"
            "AGENDA:\n\n"
            "1. CEO Opening Remarks - James Chen\n"
            "   - 2025 Year in Review: Record AUM growth of 38%\n"
            "   - Strategic vision for 2026-2028\n\n"
            "2. Quantitative Strategies Update - Dr. Li Wei, CIO\n"
            "   - ML model infrastructure upgrade completed\n"
            "   - New GPU cluster reducing training time by 60%\n"
            "   - Alpha capture rate improved to 72%\n\n"
            "3. Sustainable Investing - Sarah Zhang, Head of ESG\n"
            "   - Quantum Green Energy Fund: $8.5B committed capital\n"
            "   - Carbon-neutral portfolio target by 2028\n"
            "   - EU SFDR Article 9 classification achieved\n\n"
            "4. Financial Outlook - Michael Tan, CFO\n"
            "   - 2026 Revenue Target: $5.2 Billion\n"
            "   - Target Operating Margin: 38%\n"
            "   - Planned expansion: Singapore, Dubai, London offices\n\n"
            "5. Q&A Session\n\n"
            "Contact: ir@quantumcapital.com"
        ),
    },
]


def make_pdf(filepath, content_lines):
    """Write a minimal valid PDF that displays the given text."""
    text = content_lines.replace("\\n", "\n").replace("\n", "\n")

    # Escape PDF special chars: backslash, parens
    escaped = text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")

    # PDF objects
    pdf = f"""%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj
4 0 obj<</Length {len(escaped) + 50}>>stream
BT
/F1 10 Tf
50 740 Td
({escaped})
Tj
ET
endstream
endobj
5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Courier>>endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000266 00000 n
0000000366 00000 n
trailer<</Size 6/Root 1 0 R>>
startxref
452
%%EOF"""

    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w", encoding="ascii") as f:
        f.write(pdf)


if __name__ == "__main__":
    count = 0
    for r in reports:
        path = os.path.join(DESKTOP, r["filename"])
        make_pdf(path, r["content"])
        size = os.path.getsize(path)
        print(f"  Created: {r['filename']} ({size} bytes)")
        count += 1

    print(f"\nDone! {count} PDF files on your Desktop.")
    print("Now drag them into: regulatory-docs\\2026\\ or regulatory-docs\\2025\\")
