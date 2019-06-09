import EnumFactory from '@/utils/EnumFactory';

const CPP_INIT_CODE = "#include <string>\n" +
  "#include <vector>\n" +
  "\n" +
  "using namespace std;\n" +
  "\n" +
  "int solution(string arrangement) {\n" +
  "    int answer = 0;\n" +
  "    return answer;\n" +
  "}";

const JAVA_INIT_CODE = "class Solution {\n" +
  "    public int solution(String arrangement) {\n" +
  "        int answer = 0;\n" +
  "        return answer;\n" +
  "    }\n" +
  "}";

const JAVASCRIPT_INIT_CODE = "function solution(arrangement) {\n" +
  "    var answer = 0;\n" +
  "    return answer;\n" +
  "}";

const PYTHON2_INIT_CODE = "def solution(arrangement):\n" +
  "    answer = 0\n" +
  "    return answer";

const PYTHON3_INIT_CODE = "def solution(arrangement):\n" +
  "    answer = 0\n" +
  "    return answer";

const Language = EnumFactory.makeEnum(
  {
    JAVA: {
      ace: "java",
      value: "Java",
      file: "Solution.java",
      initCode: JAVA_INIT_CODE,
    },
    JAVASCRIPT: {
      ace: "javascript",
      value: "Javascript",
      file: "solution.js",
      initCode: JAVASCRIPT_INIT_CODE,
    },
    CPP: {
      ace: "c_cpp",
      value: "C++",
      file: "solution.cpp",
      initCode: CPP_INIT_CODE,
    },
    PYTHON2: {
      ace: "python",
      value: "Python2",
      file: "solution.py",
      initCode: PYTHON2_INIT_CODE,
    },
    PYTHON3: {
      ace: "python",
      value: "Python3",
      file: "solution.py",
      initCode: PYTHON3_INIT_CODE,
    }
  },
  {
    toString() {
      return this.value;
    }
  }
);

export default Language;
