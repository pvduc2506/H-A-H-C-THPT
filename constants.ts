
import { Topic, QuizQuestion } from './types';

export const APP_TITLE = "Cẩm Nang Hóa Học THPT";
export const APP_SUBTITLE = "Lớp 10, 11 & 12 (Chương trình mới)";

export const TOPICS_DATA: Topic[] = [
  // --- GRADE 10 TOPICS (KEPT INTACT) ---
  {
    id: "topic1",
    title: "Chuyên đề 1",
    subtitle: "Khái niệm cơ bản & Công thức",
    icon: "Atom",
    objectives: [
      "Trình bày được thành phần của nguyên tử (p, n, e).",
      "So sánh khối lượng electron với proton, neutron.",
      "Phát biểu khái niệm đồng vị, nguyên tử khối.",
      "Tính nguyên tử khối trung bình dựa vào phổ khối lượng.",
      "Vận dụng công thức tính số mol, nồng độ, định luật bảo toàn."
    ],
    sections: [
      {
        title: "1. Nguyên tử - Nguyên tố - Phân tử",
        content: "<ul><li><b>Nguyên tử:</b> Vô cùng nhỏ, trung hòa điện ($p = e$). Gồm hạt nhân (+) và vỏ electron (-).</li><li><b>Nguyên tố:</b> Tập hợp các nguyên tử có cùng số proton.</li><li><b>Đơn chất:</b> Chỉ gồm 1 nguyên tố.</li><li><b>Hợp chất:</b> Gồm 2 hay nhiều nguyên tố.</li></ul>",
        table: {
          headers: ["Z", "Kí hiệu", "Tên (IUPAC)", "Phiên âm", "M (g/mol)"],
          rows: [
            ["1", "H", "Hydrogen", "/ˈhaɪdrədʒən/", "1"],
            ["2", "He", "Helium", "/ˈhiːliəm/", "4"],
            ["6", "C", "Carbon", "/ˈkɑːbən/", "12"],
            ["7", "N", "Nitrogen", "/ˈnaɪtrədʒən/", "14"],
            ["8", "O", "Oxygen", "/ˈɒksɪdʒən/", "16"],
            ["9", "F", "Fluorine", "/ˈflɔːriːn/", "19"],
            ["11", "Na", "Sodium", "/ˈsəʊdiəm/", "23"],
            ["12", "Mg", "Magnesium", "/mæɡˈniːziəm/", "24"],
            ["13", "Al", "Aluminium", "/ˌæljəˈmɪniəm/", "27"],
            ["14", "Si", "Silicon", "/ˈsɪlɪkən/", "28"],
            ["15", "P", "Phosphorus", "/ˈfɒsfərəs/", "31"],
            ["16", "S", "Sulfur", "/ˈsʌlfə(r)/", "32"],
            ["17", "Cl", "Chlorine", "/ˈklɔːriːn/", "35.5"],
            ["19", "K", "Potassium", "/pəˈtæsiəm/", "39"],
            ["20", "Ca", "Calcium", "/ˈkælsiəm/", "40"],
            ["26", "Fe", "Iron", "/ˈaɪən/", "56"],
            ["29", "Cu", "Copper", "/ˈkɒpə(r)/", "64"],
            ["30", "Zn", "Zinc", "/zɪŋk/", "65"],
            ["35", "Br", "Bromine", "/ˈbrəʊmiːn/", "80"],
            ["47", "Ag", "Silver", "/ˈsɪlvər/", "108"],
            ["53", "I", "Iodine", "/ˈaɪədaɪn/", "127"],
            ["56", "Ba", "Barium", "/ˈberiəm/", "137"],
            ["79", "Au", "Gold", "/ɡəʊld/", "197"],
            ["80", "Hg", "Mercury", "/ˈmɜːkjəri/", "201"]
          ]
        }
      },
      {
        title: "2. Hóa trị & Công thức hóa học",
        content: "Quy tắc hóa trị: Với hợp chất $A_x B_y$ (a, b là hóa trị), ta có: $a \\cdot x = b \\cdot y$.",
        table: {
          headers: ["Hóa trị", "Nguyên tố & Nhóm nguyên tố"],
          rows: [
            ["I", "Li, Na, K, Ag | H, F, Cl, Br, I | -OH, -NO3, -NH4, -HSO4"],
            ["II", "Mg, Ca, Ba, Zn, O | =SO4, =CO3, =SO3, =HPO4"],
            ["III", "Al, Au | ≡PO4"],
            ["Đa hóa trị", "Fe (II, III); Cu (I, II); S (II, IV, VI); N (I...V); C (II, IV)"]
          ]
        }
      },
      {
        title: "3. Dãy hoạt động hóa học kim loại",
        content: "<div class='bg-wood-dark p-3 rounded border border-wood-primary/30 text-center font-bold font-mono text-chem-accent text-lg tracking-wider'>K Na Ba Ca Mg Al Zn Fe Ni Sn Pb (H) Cu Hg Ag Pt Au</div><p class='mt-2 italic text-center text-emerald-200'>\"Khi Nào Bạn Cần May Áo Záp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu\"</p><ul class='mt-4 text-sm space-y-2 list-disc pl-5'><li>Dãy sắp xếp theo chiều giảm dần tính kim loại.</li><li>Kim loại đứng trước Mg phản ứng với nước ở điều kiện thường.</li><li>Kim loại trước H tác dụng với HCl, H2SO4 loãng.</li><li>Từ Mg trở đi: Kim loại mạnh đẩy kim loại yếu ra khỏi muối.</li></ul>"
      },
      {
        title: "4. Phân loại hợp chất vô cơ (IUPAC)",
        table: {
          headers: ["Loại", "Đặc điểm", "Ví dụ & Tên gọi"],
          rows: [
            ["Oxide", "Nguyên tố + Oxygen", "<b>Basic Oxide:</b> Na2O (Sodium oxide), Fe2O3 (Iron(III) oxide)<br><b>Acidic Oxide:</b> SO2 (Sulfur dioxide), P2O5 (Diphosphorus pentoxide)"],
            ["Acid", "H + Gốc acid", "HF (Hydrofluoric acid), HCl (Hydrochloric acid), H2SO4 (Sulfuric acid)"],
            ["Base", "Kim loại + OH", "NaOH (Sodium hydroxide), Fe(OH)2 (Iron(II) hydroxide)"],
            ["Salt (Muối)", "Kim loại + Gốc acid", "NaF (Sodium fluoride), CuSO4 (Copper(II) sulfate)"]
          ]
        }
      },
      {
        title: "5. Tính chất hóa học (Tóm tắt)",
        content: "<b>Các phản ứng quan trọng:</b><ul><li>Kim loại + Phi kim -> Muối/Oxide (VD: $2Fe + 3Cl_2 \\to 2FeCl_3$)</li><li>Kim loại + Acid -> Muối + H2 (VD: $Fe + 2HCl \\to FeCl_2 + H_2$)</li><li>Acid + Base -> Muối + H2O (Trung hòa)</li><li>Basic Oxide + Acid -> Muối + H2O</li><li>Acidic Oxide + Base -> Muối + H2O</li></ul>"
      },
      {
        title: "6. Công thức tính toán thường dùng",
        subSections: [
          {
            subtitle: "Số mol (n)",
            content: "$$ n = \\frac{m}{M} $$ $$ n = \\frac{V_{dkc}}{24.79} \\quad (khí, 25^oC, 1 bar) $$ $$ n = C_M \\cdot V_{dd} $$"
          },
          {
            subtitle: "Nồng độ dung dịch",
            content: "$$ C_M = \\frac{n}{V_{dd}} \\quad (mol/L) $$ $$ C\\% = \\frac{m_{ct}}{m_{dd}} \\cdot 100\\% $$"
          },
          {
            subtitle: "Khối lượng riêng (D) & Quan hệ",
            content: "$$ D = \\frac{m_{dd}}{V_{dd}} \\quad (g/mL) $$ $$ C_M = \\frac{10 \\cdot D \\cdot C\\%}{M} $$"
          },
          {
            subtitle: "Tỉ khối hơi",
            content: "$$ d_{A/B} = \\frac{M_A}{M_B} $$"
          }
        ]
      },
      {
        title: "7. Các định luật bảo toàn",
        content: "<div class='grid grid-cols-1 md:grid-cols-3 gap-2 text-center'><div class='bg-wood-dark/80 p-2 rounded'><b>Bảo toàn khối lượng</b><br>$\\sum m_{trước} = \\sum m_{sau}$</div><div class='bg-wood-dark/80 p-2 rounded'><b>Bảo toàn Electron</b><br>$\\sum n_{e.nhường} = \\sum n_{e.nhận}$</div><div class='bg-wood-dark/80 p-2 rounded'><b>Bảo toàn Điện tích</b><br>$\\sum n_{(+)} = \\sum n_{(-)}$</div></div>"
      }
    ]
  },
  {
    id: "topic2",
    title: "Chuyên đề 2",
    subtitle: "Cấu tạo nguyên tử",
    icon: "Orbit",
    objectives: [
      "Nêu được khái niệm AO (orbital nguyên tử).",
      "Trình bày mô hình Rutherford-Bohr và mô hình hiện đại.",
      "Viết được cấu hình electron theo lớp, phân lớp, ô orbital.",
      "Dự đoán tính chất kim loại/phi kim dựa vào e lớp ngoài cùng."
    ],
    sections: [
      {
        title: "1. Thành phần cấu tạo",
        content: "Nguyên tử rỗng. Hạt nhân (+) chứa proton và neutron. Vỏ (-) chứa electron.",
        table: {
          headers: ["Hạt", "Kí hiệu", "Điện tích (C)", "Điện tích tương đối", "Khối lượng (amu)"],
          rows: [
            ["Proton", "p", "$+1.602 \\cdot 10^{-19}$", "+1", "$\\approx 1$"],
            ["Neutron", "n", "0", "0", "$\\approx 1$"],
            ["Electron", "e", "$-1.602 \\cdot 10^{-19}$", "-1", "$\\approx 0.00055$"]
          ]
        }
      },
      {
        title: "2. Kích thước & Khối lượng",
        content: "<ul><li>Đường kính nguyên tử $\\approx 10^{-10} m = 1 \\mathring{A} = 0.1 nm$.</li><li>Hạt nhân nhỏ hơn nguyên tử $10^4 - 10^5$ lần.</li><li>$1 amu = \\frac{1}{12} m_{C-12} \\approx 1.6605 \\cdot 10^{-24} g$.</li></ul>"
      },
      {
        title: "3. Hạt nhân & Đồng vị",
        content: "Kí hiệu nguyên tử: $_{Z}^{A}X$ (A = Z + N).<br><b>Đồng vị:</b> Các nguyên tử cùng Z (cùng proton) nhưng khác N (khác số khối A).",
        subSections: [
          {
            subtitle: "Nguyên tử khối trung bình",
            content: "$$ \\bar{A} = \\frac{A_1 x_1 + A_2 x_2 + ... + A_n x_n}{100} $$ Trong đó $x_i$ là phần trăm số nguyên tử của đồng vị thứ $i$."
          }
        ]
      },
      {
        title: "4. Cấu trúc lớp vỏ Electron",
        subSections: [
          {
            subtitle: "Mô hình",
            content: "<b>Rutherford-Bohr:</b> Electron chuyển động theo quỹ đạo tròn/bầu dục.<br><b>Hiện đại:</b> Electron chuyển động rất nhanh tạo thành đám mây electron (Orbital - AO)."
          },
          {
            subtitle: "Phân lớp & AO",
            content: "AO s hình cầu, AO p hình số 8 nổi.<br>Các nguyên lý:<ul><li><b>Vững bền:</b> $1s 2s 2p 3s 3p 4s 3d 4p 5s...$</li><li><b>Pauli:</b> Mỗi AO tối đa 2e (chiều tự quay ngược nhau).</li><li><b>Hund:</b> Điền e sao cho số e độc thân là tối đa.</li></ul>"
          },
          {
            subtitle: "Đặc điểm lớp ngoài cùng",
            content: "<ul><li>1, 2, 3 e: Kim loại (trừ H, He, B).</li><li>5, 6, 7 e: Phi kim.</li><li>8 e: Khí hiếm (He có 2e).</li><li>4 e: Có thể là kim loại hoặc phi kim.</li></ul>"
          }
        ]
      }
    ]
  },
  {
    id: "topic3",
    title: "Chuyên đề 3",
    subtitle: "Bảng tuần hoàn",
    icon: "Table2",
    objectives: [
      "Nêu lịch sử và nguyên tắc sắp xếp bảng tuần hoàn.",
      "Mô tả cấu tạo (ô, chu kì, nhóm).",
      "Phân loại nguyên tố (s, p, d, f).",
      "Giải thích xu hướng biến đổi: bán kính, độ âm điện, tính kim loại/phi kim.",
      "Định luật tuần hoàn."
    ],
    sections: [
      {
        title: "1. Nguyên tắc sắp xếp",
        content: "<ol class='list-decimal pl-5 space-y-2'><li>Theo chiều tăng dần của điện tích hạt nhân.</li><li>Cùng số lớp e xếp thành 1 hàng (Chu kì).</li><li>Cùng số e hóa trị xếp thành 1 cột (Nhóm).</li></ol>"
      },
      {
        title: "2. Cấu tạo Bảng tuần hoàn",
        table: {
          headers: ["Thành phần", "Mô tả"],
          rows: [
            ["Ô nguyên tố", "STT Ô = Số hiệu Z = Số p = Số e"],
            ["Chu kì", "7 chu kì (1,2,3 nhỏ; 4,5,6,7 lớn). STT Chu kì = Số lớp e."],
            ["Nhóm A", "Gồm nguyên tố s, p. STT Nhóm A = Số e lớp ngoài cùng."],
            ["Nhóm B", "Gồm nguyên tố d, f (Kim loại chuyển tiếp). STT = (n-1)d + ns."]
          ]
        },
        subSections: [
            {
                subtitle: "Xác định nhóm B",
                content: "Tổng $S = e_{(n-1)d} + e_{ns}$.<ul><li>S = 3 -> 7: Nhóm IIIB -> VIIB</li><li>S = 8, 9, 10: Nhóm VIIIB</li><li>S = 11: Nhóm IB</li><li>S = 12: Nhóm IIB</li></ul>"
            }
        ]
      },
      {
        title: "3. Xu hướng biến đổi tính chất",
        content: "Quy luật trong Chu kì (Trái -> Phải) và Nhóm A (Trên -> Dưới):",
        table: {
          headers: ["Tính chất", "Chu kì (→)", "Nhóm A (↓)"],
          rows: [
            ["Bán kính (R)", "GIẢM", "TĂNG"],
            ["Tính Kim loại", "GIẢM", "TĂNG"],
            ["Tính Base (oxide/hydroxide)", "GIẢM", "TĂNG"],
            ["Độ âm điện (χ)", "TĂNG", "GIẢM"],
            ["Tính Phi kim", "TĂNG", "GIẢM"],
            ["Tính Acid (oxide/hydroxide)", "TĂNG", "GIẢM"]
          ]
        }
      },
      {
        title: "4. Định luật tuần hoàn",
        content: "\"Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất biến đổi tuần hoàn theo chiều tăng dần của điện tích hạt nhân.\""
      }
    ]
  },
  {
    id: "topic4",
    title: "Chuyên đề 4",
    subtitle: "Liên kết hóa học",
    icon: "Link",
    objectives: [
      "Trình bày quy tắc Octet.",
      "Trình bày sự tạo thành liên kết Ion (NaCl).",
      "Viết công thức Lewis, liên kết cộng hóa trị (đơn, đôi, ba).",
      "Phân biệt liên kết dựa vào độ âm điện.",
      "Liên kết Hydrogen và tương tác Van der Waals."
    ],
    sections: [
      {
        title: "1. Quy tắc Octet",
        content: "Nguyên tử có xu hướng nhường, nhận hoặc góp chung electron để đạt cấu hình bền vững của khí hiếm (8e lớp ngoài cùng, hoặc 2e với He)."
      },
      {
        title: "2. Phân loại liên kết dựa vào Độ âm điện",
        content: "Tính hiệu độ âm điện $\\Delta \\chi = |\\chi_A - \chi_B|$:",
        table: {
          headers: ["Hiệu độ âm điện ($ \\Delta \\chi $)", "Loại liên kết"],
          rows: [
            ["$ 0 \\le \\Delta \\chi < 0.4 $", "Cộng hóa trị không cực"],
            ["$ 0.4 \\le \\Delta \\chi < 1.7 $", "Cộng hóa trị phân cực"],
            ["$ \\Delta \\chi \\ge 1.7 $", "Liên kết Ion"]
          ]
        }
      },
      {
        title: "3. Các loại liên kết chính",
        subSections: [
          {
            subtitle: "Liên kết Ion",
            content: "Hình thành do lực hút tĩnh điện giữa ion dương (cation) và ion âm (anion).<br>Thường gặp: Kim loại điển hình + Phi kim điển hình (VD: NaCl)."
          },
          {
            subtitle: "Liên kết Cộng hóa trị",
            content: "Hình thành do dùng chung cặp electron.<br><b>Liên kết Sigma ($\\sigma$):</b> Xen phủ trục, bền.<br><b>Liên kết Pi ($\\pi$):</b> Xen phủ bên, kém bền hơn.<br>Đơn: 1$\\sigma$; Đôi: 1$\\sigma$+1$\\pi$; Ba: 1$\\sigma$+2$\\pi$."
          }
        ]
      },
      {
        title: "4. Liên kết yếu",
        content: "<ul><li><b>Liên kết Hydrogen:</b> Hình thành giữa H (đã liên kết với F, O, N) với F, O, N khác. Làm tăng nhiệt độ sôi và độ tan trong nước.</li><li><b>Tương tác Van der Waals:</b> Lực hút tĩnh điện yếu giữa các cực của phân tử. Tăng theo khối lượng phân tử.</li></ul><p>Độ bền: Ion > CHT > Hydrogen > Van der Waals.</p>"
      }
    ]
  },
  {
    id: "topic5",
    title: "Chuyên đề 5",
    subtitle: "Phản ứng Oxi hóa - Khử",
    icon: "Zap",
    objectives: [
      "Xác định số oxi hóa.",
      "Nêu khái niệm chất khử, chất oxi hóa, quá trình khử, quá trình oxi hóa.",
      "Cân bằng phản ứng bằng phương pháp thăng bằng electron.",
      "Mô tả một số phản ứng thực tiễn."
    ],
    sections: [
      {
        title: "1. Các khái niệm cơ bản",
        content: "<ul><li><b>Chất khử (Bị oxi hóa):</b> Chất nhường electron (Số oxi hóa TĂNG). \"Khử cho\".</li><li><b>Chất oxi hóa (Bị khử):</b> Chất nhận electron (Số oxi hóa GIẢM). \"O nhận\".</li><li><b>Quá trình oxi hóa:</b> Quá trình nhường e.</li><li><b>Quá trình khử:</b> Quá trình nhận e.</li></ul>"
      },
      {
        title: "2. Quy tắc xác định số oxi hóa",
        content: "<ol class='list-decimal pl-5 space-y-1'><li>Đơn chất = 0.</li><li>Trong hợp chất: O thường là -2; H thường là +1. Kim loại kiềm +1, kiềm thổ +2, nhôm +3.</li><li>Tổng số oxi hóa trong phân tử = 0.</li><li>Tổng số oxi hóa trong ion = điện tích ion.</li></ol>"
      },
      {
        title: "3. Cân bằng phản ứng (Thăng bằng electron)",
        content: "Các bước:<br>1. Xác định số oxi hóa, tìm chất khử, chất oxi hóa.<br>2. Viết quá trình nhường/nhận e.<br>3. Tìm hệ số sao cho Tổng e nhường = Tổng e nhận.<br>4. Điền hệ số và cân bằng nguyên tố còn lại.",
        subSections: [
            {
                subtitle: "Ví dụ",
                content: "$Fe + 6HNO_3 \\to Fe(NO_3)_3 + 3NO_2 + 3H_2O$<br>($Fe^0 \\to Fe^{+3} + 3e$ và $N^{+5} + 1e \\to N^{+4}$)"
            }
        ]
      },
      {
        title: "4. Dự đoán tính chất",
        content: "<ul><li>Số oxi hóa thấp nhất: Chỉ có tính Khử.</li><li>Số oxi hóa cao nhất: Chỉ có tính Oxi hóa.</li><li>Số oxi hóa trung gian: Vừa khử, vừa oxi hóa.</li></ul>"
      }
    ]
  },
  {
    id: "topic6",
    title: "Chuyên đề 6",
    subtitle: "Năng lượng hóa học",
    icon: "Flame",
    objectives: [
      "Nêu ý nghĩa dấu và giá trị của Enthalpy tạo thành, biến thiên Enthalpy.",
      "Phân biệt phản ứng tỏa nhiệt, thu nhiệt.",
      "Tính biến thiên Enthalpy theo nhiệt tạo thành và năng lượng liên kết.",
      "Giải thích phản ứng trong tự nhiên."
    ],
    sections: [
      {
        title: "1. Phản ứng tỏa nhiệt & Thu nhiệt",
        content: "<ul><li><b>Tỏa nhiệt (Exothermic):</b> Giải phóng năng lượng (dạng nhiệt). $\\Delta_r H < 0$. (VD: Đốt than, trung hòa).</li><li><b>Thu nhiệt (Endothermic):</b> Hấp thu năng lượng. $\\Delta_r H > 0$. (VD: Nung đá vôi, hòa tan viên sủi).</li></ul>"
      },
      {
        title: "2. Enthalpy tạo thành chuẩn",
        content: "Kí hiệu: $\\Delta_f H_{298}^0$. Là nhiệt kèm theo phản ứng tạo thành 1 mol chất từ các đơn chất bền ở điều kiện chuẩn (25°C, 1 bar).<br>$\\Delta_f H_{298}^0$ của đơn chất bền = 0."
      },
      {
        title: "3. Tính biến thiên Enthalpy ($\\Delta_r H_{298}^0$)",
        subSections: [
          {
            subtitle: "Cách 1: Theo nhiệt tạo thành",
            content: "$$ \\Delta_r H_{298}^0 = \\sum \\Delta_f H_{298}^0 (sp) - \\sum \\Delta_f H_{298}^0 (cd) $$ <p class='text-wood-accent font-bold text-center'>\"LẤY SAU TRỪ TRƯỚC\"</p>"
          },
          {
            subtitle: "Cách 2: Theo năng lượng liên kết (Cho chất khí)",
            content: "$$ \\Delta_r H_{298}^0 = \\sum E_b (cd) - \\sum E_b (sp) $$ <p class='text-wood-accent font-bold text-center'>\"LẤY TRƯỚC TRỪ SAU\"</p>"
          }
        ]
      },
      {
        title: "4. Ý nghĩa dấu của Enthalpy",
        content: "$\\Delta_r H < 0$: Tỏa nhiệt, thuận lợi về mặt năng lượng.<br>$\\Delta_r H > 0$: Thu nhiệt."
      }
    ]
  },
  {
    id: "topic7",
    title: "Chuyên đề 7",
    subtitle: "Tốc độ phản ứng",
    icon: "Timer",
    objectives: [
      "Khái niệm tốc độ phản ứng, tốc độ trung bình.",
      "Viết biểu thức tốc độ theo định luật tác dụng khối lượng.",
      "Giải thích các yếu tố ảnh hưởng (nồng độ, áp suất, diện tích, nhiệt độ, xúc tác).",
      "Hệ số nhiệt độ Van't Hoff."
    ],
    sections: [
      {
        title: "1. Khái niệm",
        content: "Tốc độ phản ứng đặc trưng cho sự thay đổi nồng độ chất phản ứng hoặc sản phẩm theo thời gian.<br>Công thức tốc độ trung bình:<br>$$ \\bar{v} = \\pm \\frac{C_2 - C_1}{t_2 - t_1} = \\pm \\frac{\\Delta C}{\\Delta t} $$"
      },
      {
        title: "2. Định luật tác dụng khối lượng",
        content: "Với phản ứng đơn giản $aA + bB \\to ...$<br>Tốc độ tức thời: $$ v = k \\cdot C_A^a \\cdot C_B^b $$ (k: hằng số tốc độ, phụ thuộc nhiệt độ)."
      },
      {
        title: "3. Các yếu tố ảnh hưởng",
        table: {
          headers: ["Yếu tố", "Ảnh hưởng"],
          rows: [
            ["Nồng độ", "Tăng nồng độ -> Tăng tốc độ (do tăng va chạm)."],
            ["Áp suất", "Tăng áp suất (khí) -> Tăng nồng độ -> Tăng tốc độ."],
            ["Diện tích bề mặt", "Tăng diện tích (chất rắn) -> Tăng tốc độ."],
            ["Nhiệt độ", "Tăng nhiệt độ -> Tăng tốc độ. Quy tắc Van't Hoff: $ \\frac{v_2}{v_1} = \\gamma^{\\frac{T_2-T_1}{10}} $"],
            ["Chất xúc tác", "Làm giảm năng lượng hoạt hóa -> Tăng tốc độ phản ứng."]
          ]
        }
      }
    ]
  },
  {
    id: "topic8",
    title: "Chuyên đề 8",
    subtitle: "Nhóm Halogen",
    icon: "Beaker",
    objectives: [
      "Trạng thái tự nhiên, tính chất vật lý của Halogen.",
      "Tính oxi hóa mạnh và xu hướng biến đổi.",
      "Phản ứng với kim loại, hydrogen, nước, dung dịch kiềm.",
      "Tính chất Hydrogen Halide, Hydrohalic Acid.",
      "Nhận biết ion Halide."
    ],
    sections: [
      {
        title: "1. Khái quát nhóm VIIA",
        content: "Gồm Fluorine, Chlorine, Bromine, Iodine. Cấu hình lớp ngoài cùng $ns^2 np^5$.<br>Đều có 7e lớp ngoài cùng, dễ nhận 1e -> Tính oxi hóa mạnh.<br>Tính oxi hóa giảm dần: $F_2 > Cl_2 > Br_2 > I_2$.",
        table: {
          headers: ["Đơn chất", "Trạng thái (25°C)", "Màu sắc"],
          rows: [
            ["Fluorine ($F_2$)", "Khí", "Lục nhạt"],
            ["Chlorine ($Cl_2$)", "Khí", "Vàng lục"],
            ["Bromine ($Br_2$)", "Lỏng", "Nâu đỏ"],
            ["Iodine ($I_2$)", "Rắn", "Tím đen (thăng hoa)"]
          ]
        }
      },
      {
        title: "2. Tính chất hóa học đặc trưng",
        subSections: [
          {
            subtitle: "Tác dụng với kim loại",
            content: "Tạo muối Halide. $2M + nX_2 \\to 2MX_n$.<br>(Với Fe: $F_2, Cl_2, Br_2$ lên Fe(III); $I_2$ chỉ lên Fe(II))."
          },
          {
            subtitle: "Tác dụng với Hydrogen",
            content: "<ul><li>$F_2$: Phản ứng nổ ngay trong bóng tối (-250°C).</li><li>$Cl_2$: Cần ánh sáng hoặc đun nóng.</li><li>$Br_2$: Cần đun nóng.</li><li>$I_2$: Phản ứng thuận nghịch, xúc tác, nhiệt độ cao.</li></ul>"
          },
          {
            subtitle: "Tác dụng với nước",
            content: "$F_2$ phản ứng mãnh liệt (bốc cháy).<br>$Cl_2, Br_2$ phản ứng thuận nghịch tạo HX + HXO.<br>$I_2$ hầu như không phản ứng."
          },
          {
            subtitle: "Phản ứng đẩy Halogen",
            content: "Halogen mạnh đẩy halogen yếu khỏi muối (trừ F2).<br>$Cl_2 + 2NaBr \\to 2NaCl + Br_2$"
          }
        ]
      },
      {
        title: "3. Hydrogen Halide (HX) & Hydrohalic Acid",
        content: "Tính axit tăng dần: $HF < HCl < HBr < HI$.<br>HF là axit yếu (ăn mòn thủy tinh $SiO_2$). HCl, HBr, HI là axit mạnh.",
        note: "Tính khử tăng dần từ HF đến HI."
      },
      {
        title: "4. Nhận biết ion Halide (bằng AgNO3)",
        table: {
          headers: ["Ion", "Hiện tượng kết tủa", "Màu sắc"],
          rows: [
            ["$F^-$", "Không hiện tượng", "-"],
            ["$Cl^-$", "Kết tủa AgCl", "Trắng"],
            ["$Br^-$", "Kết tủa AgBr", "Vàng nhạt"],
            ["$I^-$", "Kết tủa AgI", "Vàng đậm"]
          ]
        }
      },
      {
        title: "5. Ứng dụng quan trọng",
        content: "<ul><li><b>Chlorine:</b> Xử lý nước, sản xuất nhựa PVC, tẩy trắng.</li><li><b>Javel (NaCl + NaClO):</b> Tẩy màu, sát trùng.</li><li><b>Iodine:</b> Muối I-ốt (phòng bướu cổ), cồn I-ốt (sát trùng).</li></ul>"
      }
    ]
  },

  // --- GRADE 11 TOPICS (KEPT INTACT) ---
  {
    id: "topic9",
    title: "Chuyên đề 9",
    subtitle: "Cân bằng hóa học (Hóa 11)",
    icon: "Zap",
    objectives: [
      "Trình bày khái niệm phản ứng thuận nghịch và trạng thái cân bằng.",
      "Viết biểu thức hằng số cân bằng Kc.",
      "Vận dụng nguyên lí Le Chatelier để giải thích chuyển dịch cân bằng (nhiệt độ, nồng độ, áp suất).",
      "Thực hiện thí nghiệm nghiên cứu ảnh hưởng nhiệt độ tới cân bằng."
    ],
    sections: [
      {
        title: "1. Phản ứng thuận nghịch & Cân bằng",
        content: "<ul><li><b>Phản ứng thuận nghịch:</b> Xảy ra theo hai chiều ngược nhau ($ \\rightleftharpoons $).</li><li><b>Trạng thái cân bằng:</b> Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch ($v_t = v_n$). Nồng độ các chất không đổi.</li><li><b>Cân bằng động:</b> Tại cân bằng, phản ứng vẫn xảy ra ở cấp độ vi mô.</li></ul>"
      },
      {
        title: "2. Hằng số cân bằng (Kc)",
        content: "Xét phản ứng: $aA + bB \\rightleftharpoons cC + dD$.<br>Biểu thức: $$ K_C = \\frac{[C]^c [D]^d}{[A]^a [B]^b} $$ <ul><li>Chỉ phụ thuộc vào nhiệt độ và bản chất phản ứng.</li><li>Chất rắn không xuất hiện trong biểu thức Kc.</li><li>Kc càng lớn, phản ứng thuận càng ưu thế.</li></ul>"
      },
      {
        title: "3. Chuyển dịch cân bằng (Le Chatelier)",
        content: "\"Một phản ứng đang ở trạng thái cân bằng khi chịu tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất) sẽ chuyển dịch theo chiều làm giảm tác động đó.\"",
        table: {
          headers: ["Yếu tố", "Tác động tăng", "Chiều chuyển dịch"],
          rows: [
            ["Nồng độ", "Tăng [Chất tham gia]", "Chiều thuận (làm giảm nồng độ)"],
            ["Áp suất", "Tăng áp suất chung", "Chiều giảm số mol khí"],
            ["Nhiệt độ", "Tăng nhiệt độ", "Chiều thu nhiệt ($\\Delta_r H > 0$)"],
            ["Xúc tác", "Thêm xúc tác", "Không chuyển dịch (chỉ đạt cân bằng nhanh hơn)"]
          ]
        },
        note: "Quy tắc: Tăng Thu - Giảm Tỏa (Nhiệt độ)."
      }
    ]
  },
  {
    id: "topic10",
    title: "Chuyên đề 10",
    subtitle: "Cân bằng trong dung dịch nước",
    icon: "Beaker",
    objectives: [
      "Nêu khái niệm sự điện li, chất điện li mạnh/yếu.",
      "Thuyết Brønsted – Lowry về acid – base.",
      "Khái niệm pH và ý nghĩa thực tiễn.",
      "Chuẩn độ acid-base và ý nghĩa cân bằng thủy phân ion (Al3+, CO3 2-)."
    ],
    sections: [
      {
        title: "1. Sự điện li",
        content: "<ul><li><b>Chất điện li mạnh:</b> Phân li hoàn toàn ($ \\to $). VD: Acid mạnh ($HCl, HNO_3$), Base mạnh ($NaOH$), hầu hết muối.</li><li><b>Chất điện li yếu:</b> Phân li một phần ($ \\rightleftharpoons $). VD: Acid yếu ($CH_3COOH$), Base yếu, $H_2O$.</li><li><b>Chất không điện li:</b> Dung dịch đường, ethanol...</li></ul>"
      },
      {
        title: "2. Thuyết Brønsted – Lowry",
        content: "<ul><li><b>Acid:</b> Chất cho proton ($H^+$).</li><li><b>Base:</b> Chất nhận proton ($H^+$).</li><li><b>Lưỡng tính:</b> Vừa cho vừa nhận $H^+$ (VD: $HCO_3^-, Al_2O_3$).</li></ul>"
      },
      {
        title: "3. pH của dung dịch",
        content: "$$ pH = -\\log[H^+] $$ $$ [H^+][OH^-] = 10^{-14} (25^oC) $$<ul><li>Môi trường Acid: pH < 7</li><li>Môi trường Base: pH > 7</li><li>Môi trường Trung tính: pH = 7</li></ul>"
      },
      {
        title: "4. Chuẩn độ Acid - Base",
        content: "Dùng dung dịch đã biết nồng độ (chuẩn) để xác định nồng độ dung dịch chưa biết.<br>Tại điểm tương đương: $n_{H^+} = n_{OH^-}$.<br>Chất chỉ thị: Phenolphthalein (đổi màu hồng ở pH > 8.3), Quỳ tím."
      },
      {
        title: "5. Thủy phân của ion",
        content: "<ul><li>Ion kim loại mạnh/gốc acid mạnh: Không thủy phân.</li><li>Ion của base yếu ($Al^{3+}, Fe^{3+}$) thủy phân tạo môi trường Acid.</li><li>Ion của acid yếu ($CO_3^{2-}$) thủy phân tạo môi trường Base.</li></ul>"
      }
    ]
  },
  {
    id: "topic11",
    title: "Chuyên đề 11",
    subtitle: "Nitrogen - Sulfur",
    icon: "Atom",
    objectives: [
      "Nitrogen: Tính trơ (liên kết ba), ứng dụng, quá trình tạo nitrate.",
      "Ammonia: Cấu tạo, tính base, tính khử, tổng hợp Haber-Bosch.",
      "Sulfur: Đơn chất, SO2 (oxi hóa/khử), H2SO4 (háo nước, oxi hóa mạnh).",
      "Thực trạng mưa acid và ô nhiễm không khí."
    ],
    sections: [
      {
        title: "1. Nitrogen ($N_2$)",
        content: "Cấu tạo $N \\equiv N$ rất bền -> Trơ ở nhiệt độ thường.<br><b>Tính chất:</b> Vừa oxi hóa (tác dụng kim loại, $H_2$), vừa khử (tác dụng $O_2$).<br><b>Ứng dụng:</b> Tạo môi trường trơ, bảo quản thực phẩm, sản xuất phân đạm."
      },
      {
        title: "2. Ammonia ($NH_3$) & Muối Ammonium",
        content: "Cấu tạo chóp tam giác, phân cực. Tan tốt trong nước.<br><b>Tính Base yếu:</b> $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$.<br><b>Tính Khử:</b> Phản ứng với $O_2, Cl_2$.<br><b>Tổng hợp (Haber):</b> $N_2 + 3H_2 \\rightleftharpoons 2NH_3$ ($Fe, t^o, P$).<br><b>Muối Ammonium:</b> Dễ tan, kém bền nhiệt, tác dụng với kiềm giải phóng $NH_3$."
      },
      {
        title: "3. Nitric Acid ($HNO_3$)",
        content: "Acid mạnh và Oxi hóa mạnh (tác dụng với hầu hết kim loại trừ Au, Pt, không giải phóng $H_2$).<br>Sản phẩm khử: $NO_2$ (nâu đỏ), $NO$ (không màu hóa nâu)...<br>Hiện tượng phú dưỡng: Do dư thừa N, P trong nước."
      },
      {
        title: "4. Sulfur (S) & Sulfur Dioxide ($SO_2$)",
        content: "<ul><li><b>S đơn chất:</b> Vừa oxi hóa (với KL, $H_2$), vừa khử (với $O_2$).</li><li><b>$SO_2$:</b> Khí mùi hắc, độc. Vừa oxi hóa ($+ H_2S$), vừa khử (làm mất màu $KMnO_4/Br_2$). Là nguyên nhân chính gây mưa acid.</li></ul>"
      },
      {
        title: "5. Sulfuric Acid ($H_2SO_4$)",
        content: "<ul><li><b>Loãng:</b> Tính acid mạnh.</li><li><b>Đặc:</b> Tính oxi hóa mạnh (ăn mòn kim loại, phi kim) và Tính háo nước (than hóa đường).</li><li><b>Sản xuất (Tiếp xúc):</b> $S \\to SO_2 \\to SO_3 \\to H_2SO_4$ (dùng $V_2O_5$).</li></ul>"
      }
    ]
  },
  {
    id: "topic12",
    title: "Chuyên đề 12",
    subtitle: "Đại cương Hóa học Hữu cơ",
    icon: "Orbit",
    objectives: [
      "Khái niệm hợp chất hữu cơ, nhóm chức, đồng đẳng, đồng phân.",
      "Phương pháp tách biệt: Chưng cất, Chiết, Kết tinh, Sắc kí.",
      "Công thức phân tử: CT đơn giản nhất, CTPT, Phổ khối lượng (MS).",
      "Đặc điểm liên kết và thuyết cấu tạo hóa học."
    ],
    sections: [
      {
        title: "1. Khái niệm cơ bản",
        content: "Hợp chất của Carbon (trừ CO, CO2, muối carbonate...).<br><b>Nhóm chức:</b> Nhóm nguyên tử gây ra tính chất hóa học đặc trưng (VD: -OH, -COOH).<br><b>Đồng đẳng:</b> Hơn kém nhau nhóm $CH_2$, tính chất tương tự.<br><b>Đồng phân:</b> Cùng CTPT, khác cấu tạo."
      },
      {
        title: "2. Phương pháp tách biệt & Tinh chế",
        table: {
          headers: ["Phương pháp", "Nguyên tắc"],
          rows: [
            ["Chưng cất", "Dựa vào nhiệt độ sôi khác nhau (lỏng - lỏng)."],
            ["Chiết", "Dựa vào độ tan và tỉ trọng (lỏng - lỏng không tan)."],
            ["Kết tinh", "Dựa vào độ tan theo nhiệt độ (rắn - lỏng)."],
            ["Sắc kí cột", "Dựa vào sự hấp phụ khác nhau trên pha tĩnh."]
          ]
        }
      },
      {
        title: "3. Xác định công thức phân tử",
        content: "<ul><li><b>CT Đơn giản nhất:</b> Tỉ lệ tối giản số nguyên tử ($C:H:O = x:y:z$).</li><li><b>Phổ khối lượng (MS):</b> Mảnh ion phân tử $[M^+]$ có m/z lớn nhất thường là Phân tử khối (M).</li></ul>"
      },
      {
        title: "4. Phổ hồng ngoại (IR)",
        content: "Dùng xác định nhóm chức. Ví dụ: Peak $1700 cm^{-1}$ ($C=O$), $3300 cm^{-1}$ ($O-H$, $N-H$)."
      }
    ]
  },
  {
    id: "topic13",
    title: "Chuyên đề 13",
    subtitle: "Hydrocarbon",
    icon: "Flame",
    objectives: [
      "Alkane: Thế halogen, Cracking, Reforming.",
      "Alkene/Alkyne: Cộng (H2, X2, HX), Trùng hợp, Oxi hóa.",
      "Arene (Benzene): Thế, cộng, quy tắc thế vào vòng thơm.",
      "Ứng dụng nhiên liệu và ô nhiễm môi trường."
    ],
    sections: [
      {
        title: "1. Alkane (No, mạch hở)",
        content: "CT: $C_n H_{2n+2}$. Liên kết đơn $\\sigma$.<br><b>Tính chất:</b> Phản ứng thế Halogen (ưu tiên thế H ở C bậc cao), Cracking (bẻ mạch), Cháy (tỏa nhiệt).",
        note: "Metan là thành phần chính khí thiên nhiên."
      },
      {
        title: "2. Hydrocarbon không no",
        table: {
          headers: ["Loại", "Liên kết", "Phản ứng đặc trưng"],
          rows: [
            ["Alkene ($C_n H_{2n}$)", "Đôi ($1\\sigma, 1\\pi$)", "Cộng ($Br_2$, $HX$, $H_2O$), Trùng hợp (Polymer), Oxi hóa ($KMnO_4$)."],
            ["Alkyne ($C_n H_{2n-2}$)", "Ba ($1\\sigma, 2\\pi$)", "Cộng (2 giai đoạn). Alk-1-yne thế $AgNO_3/NH_3$ (kết tủa vàng)."]
          ]
        },
        content: "<b>Quy tắc Markovnikov:</b> H cộng vào C nhiều H hơn."
      },
      {
        title: "3. Arene (Hydrocarbon thơm)",
        content: "Benzene ($C_6H_6$) có vòng lục giác đều, hệ liên hợp bền vững.<br><b>Tính chất:</b> Dễ thế (với $Br_2/Fe$, $HNO_3/H_2SO_4$), khó cộng, bền với chất oxi hóa.<br><b>Quy tắc thế:</b> Nhóm đẩy e (alkyl) định hướng ortho/para; Nhóm hút e ($NO_2$) định hướng meta."
      }
    ]
  },
  {
    id: "topic14",
    title: "Chuyên đề 14",
    subtitle: "Dẫn xuất Halogen - Alcohol - Phenol",
    icon: "Link",
    objectives: [
      "Dẫn xuất Halogen: Thủy phân, tách HX (Zaitsev).",
      "Alcohol: Liên kết Hydrogen, thế Na, thế OH, tách nước, oxi hóa.",
      "Phenol: Tính acid yếu, thế vòng thơm (bromine).",
      "Ứng dụng và tác hại."
    ],
    sections: [
      {
        title: "1. Dẫn xuất Halogen",
        content: "Phản ứng thế nguyên tử Halogen bằng OH (thủy phân trong kiềm).<br>Phản ứng tách HX tạo nối đôi (Quy tắc Zaitsev: tách cùng H ở C bậc cao)."
      },
      {
        title: "2. Alcohol (R-OH)",
        content: "Có nhóm -OH liên kết với C no. Tạo liên kết Hydrogen -> $T_{sôi}$ cao.<br><b>Tính chất:</b><ul><li>Thế H (tác dụng Na).</li><li>Thế nhóm OH (tác dụng axit).</li><li>Tách nước tạo Ether (140°C) hoặc Alkene (170°C).</li><li>Oxi hóa: Bậc 1 ra Aldehyde, Bậc 2 ra Ketone.</li><li>Polyol (Glycerol) hòa tan $Cu(OH)_2$ tạo phức xanh lam.</li></ul>"
      },
      {
        title: "3. Phenol ($C_6H_5OH$)",
        content: "Nhóm -OH liên kết trực tiếp vòng Benzene.<br><b>Tính acid:</b> Yếu (không đổi màu quỳ), tác dụng NaOH (Alcohol không phản ứng).<br><b>Thế vòng thơm:</b> Tác dụng dung dịch $Br_2$ tạo kết tủa trắng (2,4,6-tribromophenol)."
      }
    ]
  },
  {
    id: "topic15",
    title: "Chuyên đề 15",
    subtitle: "Hợp chất Carbonyl - Carboxylic Acid",
    icon: "Beaker",
    objectives: [
      "Aldehyde/Ketone: Tráng bạc, cộng HCN, tạo iodoform.",
      "Carboxylic Acid: Tính acid, ester hóa.",
      "Điều chế và ứng dụng."
    ],
    sections: [
      {
        title: "1. Aldehyde & Ketone (Hợp chất Carbonyl)",
        content: "Chứa nhóm $C=O$.<br><b>Aldehyde (-CHO):</b> Tráng bạc ($AgNO_3/NH_3$), tác dụng $Cu(OH)_2/OH^-$.<br><b>Ketone ($R-CO-R'$):</b> Không tráng bạc. Methyl ketone phản ứng Iodoform ($I_2/NaOH$ tạo tủa vàng).<br>Cả hai đều bị khử bởi $LiAlH_4$ hoặc $NaBH_4$ về Alcohol."
      },
      {
        title: "2. Carboxylic Acid (-COOH)",
        content: "Có liên kết Hydrogen bền -> $T_{sôi}$ cao nhất trong nhóm chức tương đương.<br><b>Tính Acid:</b> Yếu nhưng đầy đủ (quỳ đỏ, tác dụng kim loại, base, muối carbonate).<br><b>Phản ứng Ester hóa:</b> Acid + Alcohol $\\rightleftharpoons$ Ester + Nước (xúc tác $H_2SO_4$ đặc)."
      }
    ]
  },

  // --- GRADE 12 TOPICS (NEW ADDITIONS) ---
  {
    id: "topic16",
    title: "Chuyên đề 16",
    subtitle: "Ester - Lipid - Xà phòng",
    icon: "Beaker",
    objectives: [
      "Nêu khái niệm, đặc điểm cấu tạo, danh pháp Ester, Lipid, Chất béo.",
      "Trình bày tính chất vật lý và hóa học của Ester (thủy phân).",
      "Tính chất của chất béo (thủy phân, hydro hóa, oxi hóa).",
      "Cơ chế giặt rửa của xà phòng và tác hại của nước cứng.",
      "Ứng dụng và điều chế Ester."
    ],
    sections: [
      {
        title: "1. Ester ($R-COO-R'$)",
        content: "Sản phẩm thế nhóm OH ở carboxyl bằng OR'.<br><b>Tên gọi:</b> Tên gốc $R'$ + Tên gốc acid (đuôi at). VD: Ethyl acetate ($CH_3COOC_2H_5$).<br><b>Lý tính:</b> Ít tan trong nước, nhẹ hơn nước, mùi thơm hoa quả (Isoamyl acetate: mùi chuối).",
        subSections: [
            {
                subtitle: "Tính chất hóa học",
                content: "<ul><li>Thủy phân trong Acid ($H^+$, thuận nghịch): Tạo Acid + Alcohol.</li><li>Thủy phân trong Kiềm (Xà phòng hóa, một chiều): Tạo Muối + Alcohol.</li><li>Phản ứng cháy: $n_{CO_2} = n_{H_2O}$ (Ester no, đơn chức).</li></ul>"
            }
        ]
      },
      {
        title: "2. Lipid & Chất béo",
        content: "<b>Chất béo (Triglyceride):</b> Triester của Glycerol và Acid béo.<br>Acid béo thường gặp: Palmitic ($C_{15}H_{31}$), Stearic ($C_{17}H_{35}$), Oleic ($C_{17}H_{33}$, có 1 $C=C$), Linoleic (Omega-6).<br><b>Tính chất:</b> Thủy phân tạo Glycerol. Chất béo lỏng + $H_2$ $\\to$ Chất béo rắn (Bơ nhân tạo). Oxi hóa nối đôi gây ôi thiu."
      },
      {
        title: "3. Xà phòng & Chất giặt rửa",
        content: "Xà phòng: Muối Na/K của acid béo.<br><b>Cơ chế:</b> Đuôi kị nước bám vết bẩn, đầu ưa nước hướng ra ngoài giúp phân tán vết bẩn vào nước.<br><b>Lưu ý:</b> Xà phòng mất tác dụng trong nước cứng (tạo tủa Ca/Mg). Chất giặt rửa tổng hợp dùng được trong nước cứng."
      }
    ]
  },
  {
    id: "topic17",
    title: "Chuyên đề 17",
    subtitle: "Carbohydrate",
    icon: "Zap",
    objectives: [
      "Phân loại Carbohydrate (Mono-, Di-, Poly-).",
      "Cấu tạo và tính chất của Glucose, Fructose.",
      "Saccharose, Maltose và phản ứng thủy phân.",
      "Tinh bột, Cellulose: Cấu trúc và ứng dụng."
    ],
    sections: [
      {
        title: "1. Monosaccharide (Glucose, Fructose)",
        content: "CTPT: $C_6H_{12}O_6$.<br><b>Glucose:</b> Có nhóm Aldehyde (-CHO) và 5 nhóm -OH. Tráng bạc, làm mất màu Bromine, lên men rượu, tác dụng $Cu(OH)_2$.<br><b>Fructose:</b> Nhóm Ketone, chuyển hóa thành Glucose trong môi trường kiềm -> Cũng tráng bạc, nhưng KHÔNG mất màu Bromine."
      },
      {
        title: "2. Disaccharide (Saccharose, Maltose)",
        content: "CTPT: $C_{12}H_{22}O_{11}$.<br><b>Saccharose:</b> $\\alpha$-Glu + $\\beta$-Fruc. Không có tính khử (không tráng bạc). Thủy phân tạo Glu + Fruc.<br><b>Maltose:</b> 2 gốc Glu. Có tính khử."
      },
      {
        title: "3. Polysaccharide (Tinh bột, Cellulose)",
        content: "CTPT: $(C_6H_{10}O_5)_n$.<br><b>Tinh bột:</b> $\\alpha$-Glu. Amylose (mạch thẳng) + Amylopectin (mạch nhánh). Tác dụng Iodine -> Xanh tím.<br><b>Cellulose:</b> $\\beta$-Glu. Mạch thẳng, bền. Tan trong nước Schweizer. Tác dụng $HNO_3$ tạo thuốc súng không khói."
      }
    ]
  },
  {
    id: "topic18",
    title: "Chuyên đề 18",
    subtitle: "Hợp chất chứa Nitrogen",
    icon: "Atom",
    objectives: [
      "Amine: Phân loại, tính base, phản ứng với acid, muối.",
      "Amino Acid: Cấu tạo ion lưỡng cực, tính lưỡng tính, điểm đẳng điện.",
      "Peptide & Protein: Liên kết peptide, phản ứng thủy phân, phản ứng màu Biuret.",
      "Vai trò của Enzyme."
    ],
    sections: [
      {
        title: "1. Amine",
        content: "Thay thế H trong $NH_3$ bằng gốc Hydrocarbon. $CH_3NH_2, C_6H_5NH_2$ (Aniline).<br><b>Tính chất:</b> Tính Base (làm xanh quỳ tím ẩm, trừ Aniline). Tác dụng Acid tạo muối.<br>Aniline tác dụng $Br_2$ tạo kết tủa trắng (nhận biết)."
      },
      {
        title: "2. Amino Acid",
        content: "Tạp chức (-NH2 và -COOH). Tồn tại dạng Ion lưỡng cực.<br><b>Tính chất:</b> Lưỡng tính (tác dụng cả Acid và Base). Trùng ngưng tạo Polymer (Nylon-6, Nylon-7).<br>Các Alpha-amino acid (Gly, Ala, Val...) là đơn vị cấu tạo Protein."
      },
      {
        title: "3. Peptide & Protein",
        content: "<b>Peptide:</b> Chuỗi $\\alpha$-amino acid nối bởi liên kết $-CO-NH-$.<br><b>Protein:</b> Polypeptide cao phân tử. Dễ đông tụ bởi nhiệt, acid/base.<br><b>Phản ứng màu Biuret:</b> Peptide (trừ Dipeptide) + $Cu(OH)_2$ -> Màu tím đặc trưng."
      }
    ]
  },
  {
    id: "topic19",
    title: "Chuyên đề 19",
    subtitle: "Polymer & Vật liệu Polymer",
    icon: "Link",
    objectives: [
      "Khái niệm, phân loại Polymer.",
      "Phản ứng trùng hợp và trùng ngưng.",
      "Chất dẻo (PE, PVC...), Tơ (Nylon, Visco...), Cao su (Buna, Isoprene).",
      "Vật liệu Composite và vấn đề rác thải nhựa."
    ],
    sections: [
      {
        title: "1. Đại cương Polymer",
        content: "Mạch đại phân tử gồm nhiều mắt xích.<br><b>Điều chế:</b><br>- Trùng hợp: Monomer có liên kết bội hoặc vòng kém bền (VD: $CH_2=CH_2 \\to PE$).<br>- Trùng ngưng: Monomer có ít nhất 2 nhóm chức phản ứng, giải phóng nước (VD: Nylon-6,6, Terylene)."
      },
      {
        title: "2. Vật liệu Polymer",
        table: {
          headers: ["Loại", "Ví dụ điển hình", "Đặc điểm"],
          rows: [
            ["Chất dẻo", "PE, PVC, PS, PPF", "Tính dẻo, cách điện, nhẹ."],
            ["Tơ (Sợi)", "Nylon-6,6, Nitron, Visco", "Hình sợi, dai, bền."],
            ["Cao su", "Buna, Isoprene, Chloroprene", "Tính đàn hồi. Lưu hóa bằng S để tăng độ bền."],
            ["Keo dán", "Epoxy, Urea-formaldehyde", "Kết dính vật liệu."]
          ]
        }
      }
    ]
  },
  {
    id: "topic20",
    title: "Chuyên đề 20",
    subtitle: "Đại cương Kim loại",
    icon: "Orbit",
    objectives: [
      "Vị trí, cấu tạo, tính chất vật lý chung của kim loại.",
      "Tính chất hóa học đặc trưng (Tính khử).",
      "Dãy điện hóa và ý nghĩa.",
      "Hợp kim và các phương pháp tách kim loại."
    ],
    sections: [
      {
        title: "1. Tính chất vật lý",
        content: "Do electron tự do gây ra: Dẫn điện ($Ag>Cu>Au>Al>Fe$), Dẫn nhiệt, Ánh kim, Tính dẻo.<br>Khối lượng riêng (Li nhẹ nhất, Os nặng nhất), Nhiệt độ nóng chảy (Hg thấp nhất, W cao nhất)."
      },
      {
        title: "2. Tính chất hóa học",
        content: "Tính khử đặc trưng: $M \\to M^{n+} + ne$.<br>Tác dụng với Phi kim ($Cl_2, O_2, S$), Acid ($HCl$ vs $HNO_3/H_2SO_4$ đặc), Nước, Dung dịch muối."
      },
      {
        title: "3. Điều chế kim loại",
        content: "Nguyên tắc: Khử ion kim loại $M^{n+} + ne \\to M$.<ul><li><b>Nhiệt luyện:</b> Dùng C, CO, H2, Al khử oxide (sau Al).</li><li><b>Thủy luyện:</b> Dùng kim loại mạnh đẩy kim loại yếu (sau Al).</li><li><b>Điện phân:</b> Nóng chảy (K...Al) hoặc Dung dịch (sau Al).</li></ul>"
      }
    ]
  },
  {
    id: "topic21",
    title: "Chuyên đề 21",
    subtitle: "Điện hóa học & Ăn mòn kim loại",
    icon: "Zap",
    objectives: [
      "Thế điện cực chuẩn, Pin Galvani.",
      "Cơ chế ăn mòn hóa học và điện hóa.",
      "Các phương pháp bảo vệ kim loại.",
      "Nguyên tắc và ứng dụng của điện phân."
    ],
    sections: [
      {
        title: "1. Pin điện hóa (Galvani)",
        content: "Chuyển hóa năng lượng hóa học thành điện năng.<br>Anode (-): Oxi hóa (Zn tan). Cathode (+): Khử ($Cu^{2+}$ bám).<br>Suất điện động chuẩn: $E_{pin}^0 = E_{cathode}^0 - E_{anode}^0$."
      },
      {
        title: "2. Ăn mòn kim loại",
        content: "Sự phá hủy kim loại do tác dụng của môi trường.<br><b>Ăn mòn điện hóa:</b> Phát sinh dòng điện (VD: Gang thép trong không khí ẩm - Fe là cực âm bị ăn mòn).<br><b>Bảo vệ:</b> Phương pháp điện hóa (gắn Zn bảo vệ vỏ tàu) hoặc Phủ bề mặt."
      },
      {
        title: "3. Điện phân",
        content: "Dùng điện năng để thực hiện phản ứng oxi hóa khử.<br>Thứ tự điện phân dung dịch: Tại Catot (ion dương nào tính oxi hóa mạnh hơn nhận e trước), Tại Anot (ion âm nào tính khử mạnh hơn nhường e trước)."
      }
    ]
  },
  {
    id: "topic22",
    title: "Chuyên đề 22",
    subtitle: "Nguyên tố nhóm IA - IIA",
    icon: "Flame",
    objectives: [
      "Vị trí, cấu hình e, tính chất vật lý/hóa học của Kim loại kiềm (IA) và Kiềm thổ (IIA).",
      "Màu ngọn lửa đặc trưng.",
      "Các hợp chất quan trọng (NaOH, Na2CO3, Ca(OH)2, CaCO3, CaSO4).",
      "Nước cứng và cách làm mềm."
    ],
    sections: [
      {
        title: "1. Kim loại Kiềm (IA) & Kiềm thổ (IIA)",
        content: "Tính khử mạnh (IA > IIA). Tan trong nước (IA: tất cả; IIA: Ca, Sr, Ba).<br>Bảo quản: Ngâm trong dầu hỏa (Kiềm).<br><b>Màu ngọn lửa:</b> Na (Vàng), K (Tím), Ca (Đỏ cam), Ba (Lục)."
      },
      {
        title: "2. Hợp chất quan trọng",
        content: "<ul><li>$NaHCO_3$: Thuốc đau dạ dày, bột nở.</li><li>$Na_2CO_3$: Soda, công nghiệp thủy tinh.</li><li>$CaCO_3$: Đá vôi. $CaSO_4.2H_2O$: Thạch cao sống (nung -> nặn tượng).</li></ul>"
      },
      {
        title: "3. Nước cứng",
        content: "Chứa nhiều $Ca^{2+}, Mg^{2+}$.<br>Phân loại: Tạm thời (chứa $HCO_3^-$), Vĩnh cửu (chứa $Cl^-, SO_4^{2-}$), Toàn phần.<br>Làm mềm: Kết tủa ($Na_2CO_3, Ca(OH)_2$) hoặc Trao đổi ion."
      }
    ]
  },
  {
    id: "topic23",
    title: "Chuyên đề 23",
    subtitle: "Kim loại chuyển tiếp & Phức chất",
    icon: "Atom",
    objectives: [
      "Cấu hình electron kim loại chuyển tiếp dãy thứ nhất (Cr, Fe, Cu).",
      "Trạng thái oxi hóa và màu sắc ion.",
      "Khái niệm Phức chất, Phối tử, Số phối trí.",
      "Dạng hình học và ứng dụng của phức chất."
    ],
    sections: [
      {
        title: "1. Kim loại chuyển tiếp (Cr, Fe, Cu)",
        content: "Có electron điền vào phân lớp d.<br>Cấu hình đặc biệt: $Cr ([Ar]3d^5 4s^1)$, $Cu ([Ar]3d^{10} 4s^1)$.<br>Nhiều trạng thái oxi hóa, ion thường có màu."
      },
      {
        title: "2. Phức chất",
        content: "Gồm nguyên tử trung tâm (thường là ion kim loại chuyển tiếp) liên kết với các Phối tử (Ligand - như $H_2O, NH_3, Cl^-, CN^-$).<br>VD: $[Cu(NH_3)_4](OH)_2$ (xanh thẫm), $[Ag(NH_3)_2]^+$ (thuốc thử Tollens).<br><b>Số phối trí:</b> Số liên kết giữa phối tử và nguyên tử trung tâm."
      }
    ]
  }
];

// --- MISSING CONSTANTS ---

export const HISTORY_CONTENT = [
  {
    title: "Mendeleev (1869)",
    content: "Sắp xếp 63 nguyên tố theo chiều tăng dần khối lượng nguyên tử. Tiên đoán tính chất của các nguyên tố chưa tìm thấy (Ga, Ge).",
    isModern: false
  },
  {
    title: "Bảng tuần hoàn hiện đại",
    content: "Sắp xếp theo chiều tăng dần điện tích hạt nhân. Khắc phục nghịch lý về khối lượng (Ar > K; Te > I) của bảng Mendeleev.",
    isModern: true
  }
];

export const PRINCIPLES_CONTENT = [
  "Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân.",
  "Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp thành một hàng (chu kì).",
  "Các nguyên tố có cùng số electron hóa trị được xếp thành một cột (nhóm)."
];

export const ELECTRON_VALENCE_NOTE = "Electron hóa trị = e lớp ngoài cùng + e phân lớp sát ngoài cùng chưa bão hòa (với nhóm B).";

export const STRUCTURE_DEFINITIONS = [
  { term: "Ô Nguyên tố", desc: "Mỗi nguyên tố 1 ô. Số thứ tự ô = Số hiệu nguyên tử (Z).", color: "bg-blue-600" },
  { term: "Chu kì", desc: "Dãy nguyên tố mà nguyên tử có cùng số lớp e. 7 chu kì (1, 2, 3 nhỏ; 4, 5, 6, 7 lớn).", color: "bg-emerald-600" },
  { term: "Nhóm", desc: "Nguyên tử có cấu hình e tương tự nhau -> Tính chất hóa học gần giống nhau.", color: "bg-purple-600" }
];

export const RELATIONSHIP_DATA = [
  { left: "Số thứ tự ô", right: "Số hiệu nguyên tử (Z) = Số p = Số e" },
  { left: "Số thứ tự Chu kì", right: "Số lớp electron" },
  { left: "Số thứ tự Nhóm A", right: "Số electron lớp ngoài cùng" }
];

export const GROUP_B_LOGIC = [
  { sum: "8, 9, 10", group: "VIIIB" },
  { sum: "11", group: "IB" },
  { sum: "12", group: "IIB" },
  { sum: "3 → 7", group: "IIIB → VIIB" }
];

export const CLASSIFICATION_DATA = {
    config: {
        s_p: "Nhóm A (s: IA, IIA; p: IIIA -> VIIIA).",
        d_f: "Nhóm B (Kim loại chuyển tiếp)."
    }
};

export const QUESTION_TEMPLATES = [
    {
        topic: 'general',
        q: "Nguyên tử trung hòa về điện vì sao?",
        a: ["Số proton bằng số electron", "Số proton bằng số neutron", "Số neutron bằng số electron", "Tổng số hạt là số chẵn"],
        correct: 0,
        expl: "Nguyên tử gồm hạt nhân mang điện dương (proton) và vỏ electron mang điện âm. Để trung hòa, số p (+) phải bằng số e (-)."
    },
    {
        topic: 'topic1',
        q: "Kí hiệu hóa học của sắt là gì?",
        a: ["Fe", "Cu", "Ag", "Au"],
        correct: 0,
        expl: "Sắt (Iron) có kí hiệu là Fe (Ferrum)."
    },
    {
        topic: 'topic1',
        q: "Hạt mang điện trong hạt nhân nguyên tử là?",
        a: ["Proton", "Electron", "Neutron", "Proton và Neutron"],
        correct: 0,
        expl: "Hạt nhân gồm proton (+) và neutron (không mang điện). Electron (-) ở vỏ."
    },
    {
        topic: 'topic2',
        q: "Lớp electron thứ 2 (lớp L) chứa tối đa bao nhiêu electron?",
        a: ["8", "2", "18", "32"],
        correct: 0,
        expl: "Số e tối đa lớp n là $2n^2$. Với n=2 -> $2 \cdot 2^2 = 8$."
    },
    {
        topic: 'topic2',
        q: "Cấu hình electron của nguyên tử Na (Z=11) là?",
        a: ["$1s^2 2s^2 2p^6 3s^1$", "$1s^2 2s^2 2p^6 3s^2$", "$1s^2 2s^2 2p^5 3s^2$", "$1s^2 2s^2 2p^6$"],
        correct: 0,
        expl: "Tổng e = 11. Theo thứ tự mức năng lượng: $1s^2 2s^2 2p^6 3s^1$."
    },
    {
        topic: 'topic3',
        q: "Trong bảng tuần hoàn, các nguyên tố được sắp xếp theo nguyên tắc nào?",
        a: ["Tăng dần điện tích hạt nhân", "Tăng dần khối lượng nguyên tử", "Giảm dần số electron", "Theo thứ tự alpha-bê-ta"],
        correct: 0,
        expl: "Nguyên tắc chính là chiều tăng dần của điện tích hạt nhân (Z)."
    },
    {
        topic: 'topic3',
        q: "Chu kì trong bảng tuần hoàn là tập hợp các nguyên tố có cùng...?",
        a: ["Số lớp electron", "Số electron hóa trị", "Số proton", "Số khối"],
        correct: 0,
        expl: "Nguyên tố cùng chu kì có cùng số lớp electron."
    },
    {
        topic: 'topic4',
        q: "Liên kết ion thường được hình thành giữa?",
        a: ["Kim loại điển hình và phi kim điển hình", "Hai phi kim giống nhau", "Hai kim loại", "Hai phi kim khác nhau"],
        correct: 0,
        expl: "Liên kết ion hình thành do lực hút tĩnh điện giữa cation (kim loại mạnh) và anion (phi kim mạnh)."
    },
    {
        topic: 'topic4',
        q: "Liên kết trong phân tử $N_2$ là?",
        a: ["Cộng hóa trị ba", "Cộng hóa trị đôi", "Cộng hóa trị đơn", "Liên kết ion"],
        correct: 0,
        expl: "Nitrogen có liên kết ba bền vững ($N \equiv N$)."
    },
    {
        topic: 'topic5',
        q: "Số oxi hóa của O trong hầu hết hợp chất là?",
        a: ["-2", "-1", "+2", "+1"],
        correct: 0,
        expl: "Trong đa số hợp chất, Oxygen có số oxi hóa -2 (trừ peroxide, OF2...)."
    },
    {
        topic: 'topic5',
        q: "Trong phản ứng oxi hóa - khử, chất khử là chất...?",
        a: ["Nhường electron", "Nhận electron", "Không thay đổi số oxi hóa", "Nhận proton"],
        correct: 0,
        expl: "\"Khử cho, O nhận\". Chất khử là chất nhường electron (số oxi hóa tăng)."
    },
    {
        topic: 'topic6',
        q: "Phản ứng tỏa nhiệt có giá trị $\\Delta_r H$ như thế nào?",
        a: ["Nhỏ hơn 0", "Lớn hơn 0", "Bằng 0", "Không xác định"],
        correct: 0,
        expl: "Quy ước dấu: $\\Delta_r H < 0$ là phản ứng tỏa nhiệt (hệ mất năng lượng)."
    },
    {
        topic: 'topic7',
        q: "Yếu tố nào sau đây KHÔNG làm chuyển dịch cân bằng hóa học?",
        a: ["Chất xúc tác", "Nhiệt độ", "Nồng độ", "Áp suất"],
        correct: 0,
        expl: "Chất xúc tác làm tăng tốc độ phản ứng thuận và nghịch như nhau, nên không làm chuyển dịch cân bằng."
    },
    {
        topic: 'topic8',
        q: "Halogen nào ở trạng thái lỏng ở điều kiện thường?",
        a: ["Bromine ($Br_2$)", "Fluorine ($F_2$)", "Chlorine ($Cl_2$)", "Iodine ($I_2$)"],
        correct: 0,
        expl: "Fluorine, Chlorine là khí; Bromine là lỏng (nâu đỏ); Iodine là rắn (tím đen)."
    },
    {
        topic: 'topic9',
        q: "Khi tăng nhiệt độ, cân bằng sẽ chuyển dịch theo chiều nào?",
        a: ["Chiều thu nhiệt", "Chiều tỏa nhiệt", "Không đổi", "Chiều tăng áp suất"],
        correct: 0,
        expl: "Theo Le Chatelier: Tăng nhiệt độ -> Cân bằng chống lại bằng cách thu nhiệt ($\\%Delta H > 0$)."
    },
    {
        topic: 'topic10',
        q: "Dung dịch có pH < 7 là môi trường gì?",
        a: ["Acid", "Base", "Trung tính", "Lưỡng tính"],
        correct: 0,
        expl: "pH < 7: Acid; pH = 7: Trung tính; pH > 7: Base."
    },
    {
        topic: 'topic12',
        q: "Hợp chất hữu cơ nhất thiết phải chứa nguyên tố nào?",
        a: ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"],
        correct: 0,
        expl: "Hợp chất hữu cơ là hợp chất của Carbon (trừ một số chất vô cơ như CO, CO2...)."
    },
    {
        topic: 'topic13',
        q: "Alkane tham gia phản ứng đặc trưng nào?",
        a: ["Phản ứng thế", "Phản ứng cộng", "Phản ứng trùng hợp", "Phản ứng tráng bạc"],
        correct: 0,
        expl: "Alkane chỉ có liên kết đơn bền vững nên đặc trưng là phản ứng thế (với Halogen)."
    },
    {
        topic: 'topic16',
        q: "Phản ứng thủy phân ester trong môi trường kiềm gọi là?",
        a: ["Xà phòng hóa", "Ester hóa", "Trùng ngưng", "Hydrat hóa"],
        correct: 0,
        expl: "Thủy phân ester trong kiềm (NaOH/KOH) tạo muối và ancol, gọi là phản ứng xà phòng hóa."
    },
    {
        topic: 'topic17',
        q: "Chất nào sau đây có phản ứng tráng bạc?",
        a: ["Glucose", "Saccharose", "Tinh bột", "Cellulose"],
        correct: 0,
        expl: "Glucose có nhóm -CHO nên tráng bạc. Saccharose, tinh bột, cellulose không có tính khử này."
    }
];

// Helper to shuffle array
const shuffle = <T>(array: T[]): T[] => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

// Generate 40 questions by cloning and randomizing templates
export const generateQuestionBank = (topicId: string, count: number = 40): QuizQuestion[] => {
    // Get relevant templates
    const topicTemplates = QUESTION_TEMPLATES.filter(q => q.topic === topicId || q.topic === 'general');
    
    // If topic has specific templates, use them. Otherwise mix all (fallback).
    const baseQuestions = topicTemplates.length >= 5 ? topicTemplates : QUESTION_TEMPLATES;
    
    let result: QuizQuestion[] = [];
    
    for (let i = 0; i < count; i++) {
        const template = baseQuestions[i % baseQuestions.length];
        
        // Randomize options position
        const optionsWithIndex = template.a.map((opt, idx) => ({ opt, originalIdx: idx }));
        const shuffledOptions = shuffle([...optionsWithIndex]);
        
        const newCorrectIndex = shuffledOptions.findIndex(item => item.originalIdx === template.correct);
        
        // Add slight variation to question ID to make them distinct objects, 
        // but keep text clean for user (don't add 'Variant X' visible text if possible, or make it subtle)
        result.push({
            question: template.q, 
            options: shuffledOptions.map(o => o.opt),
            correctAnswerIndex: newCorrectIndex,
            explanation: template.expl
        });
    }
    
    return shuffle(result);
};
