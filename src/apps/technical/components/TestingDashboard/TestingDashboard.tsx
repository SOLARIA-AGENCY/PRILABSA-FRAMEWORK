/**
 * Testing Dashboard Component
 * Solaria.agency - 2024
 * 
 * Displays test results, coverage metrics, and testing actions
 */

import React, { useState, useEffect } from 'react';
import { Button } from '../../../../components/atoms/Button/Button';

interface TestSuite {
  name: string;
  tests: number;
  passed: number;
  failed: number;
  skipped: number;
  duration: number;
  status: 'passed' | 'failed' | 'running' | 'pending';
}

interface CoverageMetrics {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
}

interface TestingDashboardProps {
  className?: string;
}

export const TestingDashboard: React.FC<TestingDashboardProps> = ({ className = '' }) => {
  const [testSuites, setTestSuites] = useState<TestSuite[]>([]);
  const [coverage, setCoverage] = useState<CoverageMetrics | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [lastRun, setLastRun] = useState<Date | null>(null);

  useEffect(() => {
    loadTestResults();
  }, []);

  const loadTestResults = async () => {
    try {
      // Simulate test results (in real implementation, this would read from test output)
      const mockSuites: TestSuite[] = [
        {
          name: 'Button Component',
          tests: 35,
          passed: 35,
          failed: 0,
          skipped: 0,
          duration: 1.234,
          status: 'passed'
        },
        {
          name: 'CN Utility',
          tests: 13,
          passed: 13,
          failed: 0,
          skipped: 0,
          duration: 0.456,
          status: 'passed'
        },
        {
          name: 'App Component',
          tests: 3,
          passed: 3,
          failed: 0,
          skipped: 0,
          duration: 0.789,
          status: 'passed'
        }
      ];

      const mockCoverage: CoverageMetrics = {
        statements: 95.2,
        branches: 87.5,
        functions: 100,
        lines: 94.8
      };

      setTestSuites(mockSuites);
      setCoverage(mockCoverage);
      setLastRun(new Date());
    } catch (error) {
      console.error('Failed to load test results:', error);
    }
  };

  const handleRunTests = async () => {
    setIsRunning(true);
    try {
      console.log('Running tests...');
      // Simulate test execution
      await new Promise(resolve => setTimeout(resolve, 3000));
      await loadTestResults();
    } catch (error) {
      console.error('Test execution failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const handleRunCoverage = async () => {
    setIsRunning(true);
    try {
      console.log('Running coverage analysis...');
      // Simulate coverage analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      await loadTestResults();
    } catch (error) {
      console.error('Coverage analysis failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const getStatusColor = (status: TestSuite['status']) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-50';
      case 'failed': return 'text-red-600 bg-red-50';
      case 'running': return 'text-blue-600 bg-blue-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getCoverageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const totalTests = testSuites.reduce((sum, suite) => sum + suite.tests, 0);
  const totalPassed = testSuites.reduce((sum, suite) => sum + suite.passed, 0);
  const totalFailed = testSuites.reduce((sum, suite) => sum + suite.failed, 0);
  const passRate = totalTests > 0 ? (totalPassed / totalTests) * 100 : 0;

  return (
    <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Testing Dashboard</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRunCoverage}
              disabled={isRunning}
            >
              {isRunning ? 'Running...' : 'Coverage Report'}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleRunTests}
              disabled={isRunning}
            >
              {isRunning ? 'Running...' : 'Run Tests'}
            </Button>
          </div>
        </div>

        {lastRun && (
          <p className="text-sm text-gray-500 mb-4">
            Last run: {lastRun.toLocaleString()}
          </p>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-900">{totalTests}</div>
            <div className="text-sm text-gray-600">Total Tests</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">{totalPassed}</div>
            <div className="text-sm text-gray-600">Passed</div>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-600">{totalFailed}</div>
            <div className="text-sm text-gray-600">Failed</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">{passRate.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Pass Rate</div>
          </div>
        </div>

        {/* Coverage Metrics */}
        {coverage && (
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-900 mb-3">Coverage Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(coverage).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className={`text-lg font-semibold px-3 py-2 rounded-lg ${getCoverageColor(value)}`}>
                    {value.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600 mt-1 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Test Suites Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Suite
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tests
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Passed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Failed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {testSuites.map((suite) => (
              <tr key={suite.name} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{suite.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{suite.tests}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-green-600 font-medium">{suite.passed}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-red-600 font-medium">{suite.failed}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{suite.duration}s</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(suite.status)}`}>
                    {suite.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {testSuites.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          No test results available. Run tests to see results.
        </div>
      )}
    </div>
  );
}; 